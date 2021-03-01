import getSalesChannels from '@/api/1424-get-production-config-sales-channel-treelist'
import getBusinessType from '@/api/1408-get-production-config-business-type-search'
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
        businessType:[]
    })

    Promise.all([getSalesChannels(), getBusinessType({ status: 1, pageSize: 9999 })]).then((response) => {
        filterEmptyArray(response[0].data)
        options.salesChannels = response[0].data
        options.businessType = response[1].data.records
        getBusinessType.options = options
    })


    return options
}