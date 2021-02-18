export default [
    {
        path: 'product-line',
        redirect: 'product-line/list'
    },
    {
        path: 'product-line/list',
        meta: {
            title: '产品线管理'
        },
        component: () => import(/* webpackChunkName: "product-line" */ '@/views/produce/product-line/list')
    }
]

