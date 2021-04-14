import RouterView from '@/views/layout/router-view'
export default [
    {
        path: 'product-line',
        meta: {
            title: '产品线管理'
        },
        redirect: 'product-line/list',
        component: RouterView,
        children: [{
            path: 'list',
            component: () => import(/* webpackChunkName: "product-line" */ '@/views/produce/product-line/list'),
        },
        {
            path: 'detail/:data',
            meta: {
                title: '查看'
            },
            props: true,
            component: () => import(/* webpackChunkName: "product-line" */ '@/views/produce/product-line/detail'),
        }]
    },
]
