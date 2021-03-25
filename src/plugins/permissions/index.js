import Vue from 'vue'
import has from './has'
Vue.use({
    install(Vue) {
        Vue.prototype.$hasPermissions = has
    }
})