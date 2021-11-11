import type { App } from 'vue'
import Col from './index.vue'

Col.install = (app: App) => {
  app.component(Col.name, Col)
}

export { Col }
export default Col
