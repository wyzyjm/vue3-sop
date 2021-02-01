import Vue from 'vue'
import Element from 'element-ui'
import ElementExtends from './extends'


// 默认UI样式
import "./sop-theme/index.css"

// 浏览器重置
import "../normalize.css"

// 快捷样式
import "../zxx.css"

// Element 样式重置
import "./reset.scss"


Vue.use(Element,{
    size:'medium'
})
Vue.use(ElementExtends)
