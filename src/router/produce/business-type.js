export default [
    {
        path: 'business-type/list',
        meta: {
            title: '业务类型设置'
        },
        component: () => import(/* webpackChunkName: "business-type" */ '@/views/produce/business-type/list')
    }
]

