export default [
    {
        path: 'provider/list',
        meta:{
            title:'服务商管理'
        },
        component: () => import(/* webpackChunkName: "provider-list" */ '@/views/system-setting/provider/list')
    },
    {
        path: 'provider/add',
        meta:{
            title:'新增服务商'
        },
        component: () => import(/* webpackChunkName: "provider-add" */ '@/views/system-setting/provider/add')
    }
]