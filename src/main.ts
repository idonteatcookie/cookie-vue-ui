import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CookieUI from '.'
import './styles/index.scss'

const app = createApp(App)
app.use(CookieUI)

app.use(router)

app.mount('#app')
