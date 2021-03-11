import { reactive } from '@vue/composition-api'
import getType from '@/api/1500-get-production-config-service-product-type-list'
import getUnit from '@/api/1502-get-production-config-service-product-unit-list'
import getBusinessType from '@/api/1408-get-production-config-business-type-search'
import getPropertyList from '@/api/1635-get-production-config-service-product-property-prepared-list'

export default () => {
    if (getType.options) {
        return getType.options
    }
    const options = reactive({
        type: [],
        unit: [],
        businessType: [],
        propertyList: []
    })

    Promise.all([getUnit(), getType(), getBusinessType({ status: 1,pageSize:-1 }), getPropertyList()]).then((response) => {
        options.unit = response[0].data
        options.type = response[1].data

        options.businessType = response[2].data.records

        response[3].data.push({
            name: '归属产品线',
            valueList: [],
            code: 'productLine'
        })
        options.propertyList = response[3].data
        getType.options = options
    })


    return options
}