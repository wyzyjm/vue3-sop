import Provider from "./provider" // 服务商
import Role from "./role" // 角色
import Documents from "./document" // 文档
import Staff from "./staff" // 员工
import Resource from "./resource" // 资源
import Organizational from "./organizational" // 组织架构管理
export default [
    {
        path: '/system-setting',
        redirect: '/system-setting/provider/list',
        meta:{
            title:'系统设置'
        },
        component: () => import(/* webpackChunkName: "setting" */ '@/views/system-setting'),
        children: [
            ...Provider,
            ...Role,
            ...Documents,
            ...Staff,
            ...Resource,
            ...Organizational
        ]
    }
]