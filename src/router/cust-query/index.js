export default [
    {
        path: 'cust-query',
        meta: {
            title: '客户查询'
        },
        component: () => import(/* webpackChunkName: "cust-query" */ '@/views/cust-query/list')
    }
]

