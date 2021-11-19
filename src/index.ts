import { App } from 'vue'

import Button from './packages/button'
import Row from './packages/row'
import Col from './packages/col'
import Icon from './packages/icon'
import Alert from './packages/alert'
import Avatar from './packages/avatar'

const packages = [Button, Row, Col, Icon, Alert, Avatar]

function install(app: App) {
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export { install, Button, Row, Col, Icon, Avatar }

export default { install }
