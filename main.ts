import { createApp } from 'vue'
import { AppEntry } from './src/app'
import { router } from './src/app/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vueClickOutsideElement from 'vue-click-outside-element'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(AppEntry)

app.use(router)
app.use(pinia)
app.use(vueClickOutsideElement)

app.mount('#app')
