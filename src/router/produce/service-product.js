import RouterView from '@/views/layout/router-view'
export default [
    {
        path: 'service-product',
        meta: {
            title: '服务产品管理'
        },
        redirect: 'service-product/list',
        component: RouterView,
        children: [{
            path: 'list',
            component: () => import(/* webpackChunkName: "service-product" */ '@/views/produce/service-product/list'),
        },
        {
            path: 'detail/:data',
            meta: {
                title: '查看'
            },
            props: true,
            component: () => import(/* webpackChunkName: "service-product" */ '@/views/produce/service-product/detail'),
        }]
    },
]
