import { createApp } from 'vue'
import { AppEntry } from './src/app'
import { router } from './src/app/router'

const app = createApp(AppEntry)

app.use(router)

app.mount('#app')
