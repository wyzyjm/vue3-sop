import { createApp } from 'vue'
import App from './app.vue'
import router from "./router/index"
import elementPlus from './plugins/ui/element-plus'
createApp(App).use(router).use(elementPlus).mount('#app')
