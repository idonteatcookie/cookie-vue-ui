import { App } from 'vue'

import { Button } from './button'

declare function install(app: App): void

export { Button, install }
declare const _default: {
  install: typeof install
  version: string
}
export default _default
