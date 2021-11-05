import { App } from 'vue'

import Button from './packages/button'

const packages = [Button]

function install(app: App) {
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export { install, Button }

export default { install }
