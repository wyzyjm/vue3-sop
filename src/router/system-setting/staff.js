export default [
    {
        path: 'staff/list',
        meta:{
            title:'员工管理'
        },
        component: () => import(/* webpackChunkName: "staff-list" */ '@/views/system-setting/staff/list')
    },
    {
        path: 'staff/add',
        meta:{
            title:'新增员工信息'
        },
        component: () => import(/* webpackChunkName: "staff-add" */ '@/views/system-setting/staff/add')
    },   
    {
        path: 'staff/edit/:id',
        meta:{
            title:'编辑员工信息'
        },
        component: () => import(/* webpackChunkName: "staff-edit" */ '@/views/system-setting/staff/add')
    },       
    {
        path: 'staff/detail/:pid',
        meta:{
            title:'员工信息详情'
        },
        component: () => import(/* webpackChunkName: "staff-detail" */ '@/views/system-setting/staff/detail')
    }    
]