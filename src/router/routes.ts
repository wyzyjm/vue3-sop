import DefaultLayout from '../layout/default.vue'
import Test1 from '../views/test1/index.vue'
export default [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        children: [{
            path: 'test1',
            component: Test1
        }]
    }
]
