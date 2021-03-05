export default [
    {
        path: 'my-services',
        meta: {
            title: '我的服务'
        },
        component: () => import(/* webpackChunkName: "my-services" */ '@/views/my-services/list')
    }
]

