import { reactive } from '@vue/composition-api'
import getOptions from '@/api/1500-get-service-product-type-list'

export default () => {
    if (getOptions.options) {
        return getOptions.options
    }
    const options = reactive({
        type: [],
    })
    getOptions().then(({ data }) => {
        options.type = data
        getOptions.options = options
    })

    return options
}