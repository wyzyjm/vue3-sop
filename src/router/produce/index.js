import ServiceFlow from "./service-flow" // 服务流程设置
import BusinessType from './business-type' //业务设置，业务类型设置
import ServiceType from './service-type' //服务单状态管理
import ServiceOnePhaseInformation from './service-one-phase-information' //服务单状态管理
import SalesChannels from './sales-channels'  //售卖渠道管理
import ProductLine from './product-line'  //产品线管理
import ServiceProduct from './service-product'  //服务产品管理
import ProductPeriod from "./product-period" //生产周期管理

export default [
    {
        path: '/produce',
        meta: {
            title: '生产设置'
        },
        redirect: '/produce/service-flow',
        component: () => import(/* webpackChunkName: "produce" */ '@/views/produce'),
        children: [
            ...ServiceFlow,
            ...BusinessType,
            ...ServiceType,
            ...ServiceOnePhaseInformation,
            ...SalesChannels,
            ...ProductLine,
            ...ServiceProduct,
            ...ProductPeriod
        ]
    }
]