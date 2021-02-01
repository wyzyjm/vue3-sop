import Layout from '../views/layout/default'
import ErrorPage404 from '../views/layout/404'
import ErrorPage403 from '../views/layout/403'
import test from "./test"
import setting from "./setting"
import produce from "./produce/index"
export default [
    {
        path: "/",
        meta:{
            title:'首页'
        },
        component: Layout,
        children: [
            ...test,
            ...setting,
            ...produce
        ]
    },
    {
        path: "*",
        component: ErrorPage404
    },
    {
        path: "/403",
        component: ErrorPage403
    },
    {
        path: "/404",
        component: ErrorPage404
    }
]
