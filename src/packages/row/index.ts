import type { App } from 'vue'
import Row from './index.vue'

Row.install = (app: App) => {
  app.component(Row.name, Row)
}

export { Row }
export default Row
