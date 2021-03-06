// https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
import path from 'path'
import fs from 'fs'
import { Project, SourceFile, CompilerOptions } from 'ts-morph'
import glob from 'fast-glob'
import resolveFrom from 'resolve-from'

export type Options = {
  input: string | string[]
  outDir?: string
}

let vueCompiler: typeof import('@vue/compiler-sfc')

const getVueCompiler = () => {
  if (!vueCompiler) {
    const id = resolveFrom.silent(process.cwd(), '@vue/compiler-sfc')
    if (!id) {
      throw new Error(`@vue/compiler-sfc is not founded in ./node_modules`)
    }
    vueCompiler = require(id)
  }

  return vueCompiler
}

export async function build({ input, outDir }: Options) {
  const vueCompiler = getVueCompiler()
  const tsConfigFilePath = fs.existsSync('tsconfig.json') ? 'tsconfig.json' : undefined
  const compilerOptions: CompilerOptions = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmitOnError: true
  }
  if (outDir) {
    compilerOptions.outDir = outDir
  }
  const project = new Project({
    compilerOptions,
    tsConfigFilePath,
    skipAddingFilesFromTsConfig: true
  })
  const files = await glob(input)

  const sourceFiles: SourceFile[] = []

  await Promise.all(
    files.map(async (file) => {
      const content = await fs.promises.readFile(file, 'utf8')
      if (file.endsWith('.ts')) {
        const sourceFile = project.createSourceFile(path.relative(process.cwd(), file), content, {
          overwrite: true
        })
        sourceFiles.push(sourceFile)
        return
      }
      const sfc = vueCompiler.parse(content)
      const { script, scriptSetup } = sfc.descriptor
      if (script || scriptSetup) {
        let content = ''
        let isTS = false
        if (script && script.content) {
          content += script.content
          if (script.lang === 'ts') isTS = true
        }
        if (scriptSetup) {
          const compiled = vueCompiler.compileScript(sfc.descriptor, {
            id: 'xxx'
          })
          content += compiled.content
          if (scriptSetup.lang === 'ts') isTS = true
        }
        const sourceFile = project.createSourceFile(
          path.relative(process.cwd(), file) + (isTS ? '.ts' : '.js'),
          content
        )
        sourceFiles.push(sourceFile)
      }
    })
  )

  const diagnostics = project.getPreEmitDiagnostics()
  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

  project.emitToMemory()

  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath().replace('/src', '').replace('.vue.d.ts', '.d.ts')
      await fs.promises.mkdir(path.dirname(filepath), { recursive: true })
      await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8')
      console.log(`Emitted ${filepath}`)
    }
  }
}

build({ input: ['src/packages/*/index.vue', 'src/index.ts'], outDir: 'dist' })
