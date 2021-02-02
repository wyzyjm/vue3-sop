import Provider from "./provider" // 服务商
import Role from "./role" // 服务商
export default [
    {
        path: '/system-setting',
        meta:{
            title:'系统设置'
        },
        component: () => import(/* webpackChunkName: "setting" */ '@/views/system-setting'),
        children: [
            ...Provider,
            ...Role
        ]
    }
]