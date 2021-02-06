export default [
    {
        path: 'service-one-phase-information',
        meta: {
            title: '客户呈现信息配置'
        },
        redirect: 'service-one-phase-information/list',
        component: () => import(/* webpackChunkName: "service-one-phase-information" */ '@/views/produce/service-one-phase-information/index'),
        children: [{
            path: 'list',
            component: () => import(/* webpackChunkName: "service-one-phase-information" */ '@/views/produce/service-one-phase-information/list'),
        },
        {
            path: 'add',
            meta: {
                title: '新增'
            },
            component: () => import(/* webpackChunkName: "service-one-phase-information" */ '@/views/produce/service-one-phase-information/add'),
        }]
    },
]

