import Works from "./works" // 订单监控
export default [
    {
        path: '/order',
        meta: {
            title: '订单监控'
        },
        redirect: '/order/works',
        component: () => import(/* webpackChunkName: "works" */ '@/views/order-monitor'),
        children: [
            ...Works
        ]
    }
]