export default [
    {
        path: 'document/list',
        meta:{
            title:'文档管理'
        },
        component: () => import(/* webpackChunkName: "document-list" */ '@/views/system-setting/document/list')
    },
    {
        path: 'document/add',
        meta:{
            title:'新增文档'
        },
        component: () => import(/* webpackChunkName: "document-add" */ '@/views/system-setting/document/add')
    },   
    {
        path: 'document/edit/:id',
        meta:{
            title:'编辑文档'
        },
        component: () => import(/* webpackChunkName: "document-edit" */ '@/views/system-setting/document/add')
    },         
]