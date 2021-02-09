export default [
    {
        path: 'service-flow',
        meta:{
            title:'服务流程设置'
        },
        component: () => import(/* webpackChunkName: "service-flow" */ '@/views/produce/service-flow')
    },
    {
        path: 'add-flow',
        meta:{
            title:' 新增流程'
        },
        component: () => import(/* webpackChunkName: "add-flow" */ '@/views/produce/service-flow/add-flow')
    }
]