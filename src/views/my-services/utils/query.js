import { reactive } from '@vue/composition-api'
import getBusinessList from '@/api/1408-get-production-config-business-type-search'
import getStatusList from '@/api/1685-get-production-config-service-order-status-list'

export default () => {
    // if (getBusinessList.options) {
    //     return getBusinessList.options
    // }
    const options = reactive({
        businessTypes: [],
        statuss: [],
    })
    getBusinessList().then(({ data }) => {
        // data.records.unshift({name: '全部', id: ''})
        // console.log(data.records)
        options.businessTypes = data.records
        getBusinessList.options = options
    })

    getStatusList().then(({ data }) => {
        // console.log(data)
        // data.unshift({name: '全部', id: ''})
        console.log(data)
        options.statuss = data
        getStatusList.options = options
    })    

    return options
}