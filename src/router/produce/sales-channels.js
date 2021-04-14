export default [
    {
        path: 'sales-channels',
        redirect: 'sales-channels/list'
    },
    {
        path: 'sales-channels/list',
        meta: {
            title: '售卖渠道管理'
        },
        component: () => import(/* webpackChunkName: "sales-channels" */ '@/views/produce/sales-channels/list')
    }
]

