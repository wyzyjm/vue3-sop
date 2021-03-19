export default [
    {
        path: 'service',
        meta:{
            title:'服务单流程'
        },
        component: () => import(/* webpackChunkName: "translate" */ '@/views/user-service/translate')
    }
]