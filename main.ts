import { createApp } from 'vue'
import { AppEntry } from './src/app'
import { router } from './src/app/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(AppEntry)

app.use(router)
app.use(pinia)

app.mount('#app')
