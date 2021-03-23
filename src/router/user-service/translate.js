export default [
    {
        path: 'service/:custId/:orderCode',
        meta:{
            title:'服务单流程'
        },
        component: () => import(/* webpackChunkName: "translate" */ '@/views/user-service/translate')
    }
]