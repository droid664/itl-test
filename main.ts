import { createApp } from 'vue'
import { AppEntry } from './src/app'
import { router } from './src/app/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(AppEntry)

app.use(router)
app.use(pinia)

app.mount('#app')
