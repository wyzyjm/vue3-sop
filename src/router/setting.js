export default [{
    path: '/setting/role/list',
    meta: {
        title: '角色管理'
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting/role/list'),
},
{
    path: '/setting/provider',
    meta: {
        title: '服务商管理'
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting/provider/list'),
    children: [
        {
            path: '/setting/provider/list',
            meta: {
                title: '服务商管理'
            },
            component: () => import(/* webpackChunkName: "setting" */ '../views/setting/provider/list'),
        },
        {
            path: '/setting/provider/add',
            meta: {
                title: '新增服务商'
            },
            component: () => import(/* webpackChunkName: "setting" */ '../views/setting/provider/add'),
        }
    ]
}]