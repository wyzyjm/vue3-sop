export default [
    {
        path: 'works',
        meta:{
            title:'我的工作台'
        },
        component: () => import(/* webpackChunkName: "works" */ '@/views/order-monitor/works')
    }
]