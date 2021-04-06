export default [
    {
        path: '/tool',
        meta: {
            title: '我的工具'
        },
        component: () => import(/* webpackChunkName: "tool" */ '@/views/my-tool'),
        children: [
            {
                path: 'log',
                meta:{
                    title:'操作日志'
                },
                component: () => import(/* webpackChunkName: "log" */ '@/views/my-tool/log')
            },
            {
                path: 'errData',
                meta:{
                    title:'异常数据'
                },
                component: () => import(/* webpackChunkName: "errData" */ '@/views/my-tool/errData')
            },
            {
                path: 'evaluate',
                meta:{
                    title:'复评'
                },
                component: () => import(/* webpackChunkName: "evaluate" */ '@/views/my-tool/evaluate')
            }
        ]
    }
]