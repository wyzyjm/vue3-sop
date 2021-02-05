export default [
    {
        path: 'service-one-phase-information/list',
        meta: {
            title: '客户呈现信息配置'
        },
        component: () => import(/* webpackChunkName: "service-one-phase-information" */ '@/views/produce/service-one-phase-information/list'),
    },
    {
        path: 'service-one-phase-information/add',
        meta: {
            title: '新增'
        },
        component: () => import(/* webpackChunkName: "service-one-phase-information" */ '@/views/produce/service-one-phase-information/add'),
    }
]

