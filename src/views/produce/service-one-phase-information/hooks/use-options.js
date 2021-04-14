
import { reactive } from '@vue/composition-api'
import getBusinessFlowList from '@/api/1452-get-service-order-cust-service-show-config-getbusinessflowlist'


export default () => {
    if (getBusinessFlowList.options) {
        return getBusinessFlowList.options
    }
    const options = reactive({
        businessFlowList: [],
    })

    Promise.all([getBusinessFlowList()]).then((response) => {
        options.businessFlowList = response[0].data
        getBusinessFlowList.options = options
    })


    return options
}