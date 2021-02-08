export default [
    {
        path: 'resource/list',
        meta:{
            title:'资源管理'
        },
        component: () => import(/* webpackChunkName: "resource-list" */ '@/views/system-setting/resource/list')
    }
]