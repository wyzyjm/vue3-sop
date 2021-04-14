import Vue from 'vue'
import { hasPermissions, getResourceObject } from './funs'
Vue.use({
    install(Vue) {
        Vue.prototype.$hasPermissions = hasPermissions
        Vue.prototype.$getResourceObject = getResourceObject
    }
})