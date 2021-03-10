export default [
    {
        path: 'organizational/list',
        meta: {
            title: '组织架构管理'
        },
        component: () => import(/* webpackChunkName: "organizational" */ '@/views/system-setting/organizational/list')
    },
    // {
    //     path: 'organizational/add',
    //     meta: {
    //         title: '组织架构管理'
    //     },
    //     component: () => import(/* webpackChunkName: "organizational" */ '@/views/system-setting/organizational/add')
    // },
    // {
    //     path: 'organizational/edit/:id',
    //     meta: {
    //         title: '组织架构管理'
    //     },
    //     component: () => import(/* webpackChunkName: "organizational" */ '@/views/system-setting/organizational/add')
    // },
]