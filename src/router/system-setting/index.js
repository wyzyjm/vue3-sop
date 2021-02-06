import Provider from "./provider" // 服务商
import Role from "./role" // 角色
import Documents from "./document" // 角色
import Staff from "./staff" // 角色
export default [
    {
        path: '/system-setting',
        meta:{
            title:'系统设置'
        },
        component: () => import(/* webpackChunkName: "setting" */ '@/views/system-setting'),
        children: [
            ...Provider,
            ...Role,
            ...Documents,
            ...Staff
        ]
    }
]