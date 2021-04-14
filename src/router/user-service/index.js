import Translate from "./translate" // 会员中心服务透明化
export default [
    {
        path: '/center',
        meta: {
            title: '会员中心服务透明化'
        },
        redirect: '/center/service',
        component: () => import(/* webpackChunkName: "user-service" */ '@/views/user-service'),
        children: [
            ...Translate
        ]
    }
]