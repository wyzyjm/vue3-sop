import { reactive } from '@vue/composition-api'
import getType from '@/api/1500-get-production-config-service-product-type-list'
import getUnit from '@/api/1502-get-production-config-service-product-unit-list'
import getBusinessType from '@/api/1408-get-production-config-business-type-search'

export default () => {
    if (getType.options) {
        return getType.options
    }
    const options = reactive({
        type: [],
    })

    Promise.all([getUnit(),getType(),getBusinessType()]).then((response) => {
        options.unit = response[0].data
        options.type = response[1].data
        options.businessType=response[2].data
        getType.options = options
    })


    return options
}