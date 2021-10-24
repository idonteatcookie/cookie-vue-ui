使用 commitlint 校验代码提交格式

[commitlint](https://github.com/conventional-changelog/commitlint) 可以用于检查你的 commit 信息是否符合规范提交格式。


安装

```shell
yarn add @commitlint/config-conventional @commitlint/cli -D
```

创建配置文件 `commitlint.config.js`

```json
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'chore', 'docs', 'feat', 'fix', 'test', 'refactor', 'revert', 'style', 'release']
    ]
  }
}
```

此处配置了提交类型

- `feat` 新功能
- `fix` 修复bug
- `upd` 更新某功能（不是 feat/fix）
- `docs` 修改文档
- `test` 测试用例的修改
- `refactor` 代码重构，未新增任何功能和修复任何bug
- `revert` 回滚到上一个版本
- `style` 仅仅修改了空格、缩进等，不改变代码逻辑
- `chore` 构建过程或辅助工具的变动（不符合上面所有类型的）

在 husky 中新增 hook

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

提交信息格式应该为 

```shell
type(scope?): subject  #scope is optional; multiple scopes are supported
```
不符合规范的提交将被禁止。