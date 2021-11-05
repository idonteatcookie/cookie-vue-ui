import { createApp } from 'vue'
import App from './App.vue'
import CookieUI from '.'
import './styles/index.scss'

const app = createApp(App)
app.use(CookieUI)

app.mount('#app')
