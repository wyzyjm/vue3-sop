import { createApp } from 'vue'
import App from './layout/app.vue'
import router from "./router/index"
import elementPlus from './plugins/ui/element-plus'
createApp(App).use(router).use(elementPlus).mount('#app')
