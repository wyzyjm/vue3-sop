export default [
    {
        path: 'service-flow',
        meta:{
            title:'服务流程设置'
        },
        component: () => import(/* webpackChunkName: "service-flow" */ '@/views/produce/service-flow')
    }
]