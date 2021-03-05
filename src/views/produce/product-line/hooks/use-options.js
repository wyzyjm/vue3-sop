import getSalesChannels from '@/api/1424-get-production-config-sales-channel-treelist'
import getBusinessType from '@/api/1408-get-production-config-business-type-search'
import getServiceProvider from '@/api/1306-get-frontapi-service-provider-pagelist'
import getProductList from '@/api/1665-get-production-config-product-group-by-code-list'

import { reactive } from '@vue/composition-api'

function filterEmptyArray(arr) {
    if (!Array.isArray(arr)) return
    arr.forEach(function (v) {
        if (v.children.length === 0) {
            v.children = null
        } else {
            filterEmptyArray(v.children)
        }
    })
}

export default () => {
    if (getBusinessType.options) {
        return getBusinessType.options
    }
    const options = reactive({
        salesChannels: [],
        businessType: [],
        serviceProvider: [],
        productList:[],
        org: []
    })

    Promise.all([getSalesChannels({status:1}), getBusinessType({ status: 1, pageSize: 9999 }), getServiceProvider({ status: 0, pageSize: 9999 }),getProductList()]).then((response) => {
        filterEmptyArray(response[0].data)
        options.salesChannels = response[0].data
        options.businessType = response[1].data.records
        options.serviceProvider = response[2].data.records
        options.productList = response[3].data

        getBusinessType.options = options
    })


    return options
}