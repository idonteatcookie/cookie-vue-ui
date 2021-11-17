import type { App } from 'vue'
import Alert from './index.vue'

Alert.install = (app: App) => {
  app.component(Alert.name, Alert)
}

export { Alert }
export default Alert
