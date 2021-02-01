export default [{
    path: '/setting/role/list',
    meta: {
        title: '角色管理'
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting/role/list'),
}]