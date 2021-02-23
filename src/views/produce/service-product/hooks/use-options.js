import { reactive } from '@vue/composition-api'
import getType from '@/api/1500-get-service-product-type-list'
import getUnit from '@/api/1502-get-service-product-unit-list'
export default () => {
    if (getType.options) {
        return getType.options
    }
    const options = reactive({
        type: [],
    })

    Promise.all([getUnit(),getType()]).then((response) => {
        options.unit = response[0].data
        options.type = response[1].data
        getType.options = options
    })


    return options
}