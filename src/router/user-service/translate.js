export default [
    {
        path: 'service',
        meta:{
            title:'翻译服务'
        },
        component: () => import(/* webpackChunkName: "translate" */ '@/views/user-service/translate')
    }
]