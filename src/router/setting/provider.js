export default [
    {
        path: 'provider/list',
        meta:{
            title:'服务商管理'
        },
        component: () => import(/* webpackChunkName: "provider-list" */ '@/views/setting/provider/list')
    },
    {
        path: 'provider/add',
        meta:{
            title:'新增服务商'
        },
        component: () => import(/* webpackChunkName: "provider-add" */ '@/views/setting/provider/add')
    }
]