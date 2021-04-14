import Layout from '../views/layout/default'
import ErrorPage404 from '../views/layout/404'
import ErrorPage403 from '../views/layout/403'
import test from "./test"
import systemSetting from "./system-setting/index"
import produce from "./produce"
import Tool from "./my-tool"
import custQuery from "./cust-query/index"
import myServices from "./my-services/index"
import orderMonitor from "./order-monitor/index"
import caseCenter from "./case-center/index"
import userService from "./user-service/index"
export default [
    {
        path: "/",
        meta: {
            title: '首页'
        },
        component: Layout,
        children: [
            ...test,
            ...systemSetting,
            ...produce,
            ...Tool,
            ...custQuery,
            ...orderMonitor,
            ...caseCenter,
            ...userService,
            ...myServices
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
