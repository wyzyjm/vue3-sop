import ServiceFlow from "./service-flow" // 服务流程设置
export default [
    {
        path: '/produce',
        meta:{
            title:'生产设置'
        },
        component: () => import(/* webpackChunkName: "produce" */ '@/views/produce'),
        children: [
            ...ServiceFlow
        ]
    }
]