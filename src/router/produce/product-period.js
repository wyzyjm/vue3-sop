export default [
    {
        path: 'product-period/list',
        meta: {
            title: '生产周期管理'
        },
        component: () => import(/* webpackChunkName: "product-period" */ '@/views/produce/product-period/list')
    }
]

