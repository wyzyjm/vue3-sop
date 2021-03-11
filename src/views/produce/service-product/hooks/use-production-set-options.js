import { reactive } from '@vue/composition-api'
import getBusinessFlow from '@/api/1482-get-service-order-sevice-business-flow'
import getSalesChannelList from '@/api/1424-get-production-config-sales-channel-treelist'


function filterEmptyArrayAndSetDisabled(arr) {
    if (!Array.isArray(arr)) return
    arr.forEach(function (v) {
        v.disabled = v.status === 0
        if (v.children.length === 0) {
            v.children = null
        } else {
            filterEmptyArrayAndSetDisabled(v.children)
        }
    })
}



export default () => {
    if (getBusinessFlow.options) {
        return getBusinessFlow.options
    }
    const options = reactive({
        businessFlow: [],
        salesChannelList: []
    })

    Promise.all([getBusinessFlow({ status: 1, pageSize: -1 }), getSalesChannelList({ status: 1 })]).then((response) => {
        filterEmptyArrayAndSetDisabled(response[1].data)
        options.businessFlow = response[0].data.records
        options.salesChannelList = response[1].data
        getBusinessFlow.options = options
    })


    return options
}