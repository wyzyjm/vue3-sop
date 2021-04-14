// 全局组件注册位置
import Vue from 'vue'
import breadcrumb from './breadcrumb'
/**
 * 面包屑
 * required:false  不传默认从路由读取
 * prop:data(Array)
 * example:data:[{path:'/',title:'首页'}]
 */
Vue.component('breadcrumb', breadcrumb)
