export default [
    {
        path: 'role/list',
        meta:{
            title:'角色管理'
        },
        component: () => import(/* webpackChunkName: "role-list" */ '@/views/system-setting/role/list')
    }
]