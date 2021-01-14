import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import elementPlus from 'element-plus'
import './assets/base.css'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App).use(router).use(elementPlus).mount('#app')
