export default [
    {
        path:'service-type',
        redirect:'service-type/list'
    },
    {
        path: 'service-type/list',
        meta: {
            title: '服务单状态管理'
        },
        component: () => import(/* webpackChunkName: "service-type" */ '@/views/produce/service-type/list')
    }
]

