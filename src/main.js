import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './plugins/veeValidate'
import { createPinia } from 'pinia'
import routes from "./plugins/router.js";
import './plugins/veeValidate.js'

loadFonts()

const app=createApp(App)
app.use(createPinia());
app.use(routes)
app.use(vuetify).mount('#app')
