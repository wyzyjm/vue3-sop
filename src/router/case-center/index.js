import Recommend from "./recommend" // 案例中心
export default [
    {
        path: '/case',
        meta: {
            title: '案例中心'
        },
        redirect: '/case/recommend',
        component: () => import(/* webpackChunkName: "works" */ '@/views/case-center'),
        children: [
            ...Recommend
        ]
    }
]