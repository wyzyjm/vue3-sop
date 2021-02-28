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
    },
    {
        name: 'provider-edit',
        path: 'provider/edit/:category/:pid',
        meta:{
            title:'编辑服务商'
        },
        component: () => import(/* webpackChunkName: "provider-edit" */ '@/views/system-setting/provider/add')
    },
    {
        path: 'provider/detail/:category/:pid',
        meta:{
            title:'服务商详情'
        },
        component: () => import(/* webpackChunkName: "provider-detail" */ '@/views/system-setting/provider/detail')
    }    
]