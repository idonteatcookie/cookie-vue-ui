import { App } from 'vue'

import Button from './button'

function install(app: App) {
  const packages = [Button]
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
