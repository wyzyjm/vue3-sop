export default [
    {
        path: '/my-services',
        redirect: '/my-services/list',
        meta: {
            title: '我的服务'
        },
        component: () => import(/* webpackChunkName: "my-services" */ '@/views/my-services'),
        children: [
            {
                path: 'list',
                meta:{
                    title:'服务列表'
                },
                component: () => import(/* webpackChunkName: "list" */ '@/views/my-services/list')
            }, 
            {
                path: 'detail/:id/:code',
                meta:{
                    title:'服务详情'
                },
                component: () => import(/* webpackChunkName: "detail" */ '@/views/my-services/detail')
            }, 
        ]
    }
]

