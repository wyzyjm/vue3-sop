import DefaultLayout from '../layout/default.vue'
import Test1 from '../views/test1/index.vue'
export default [
    {
        path: '/',
        name: 'DefaultLayout',
        meta:{
            title:'首页'
        },
        component: DefaultLayout,
        children: [{
            path: 'test1',
            meta:{
                title:'测试页面1'
            },
            component: Test1
        }]
    }
]
