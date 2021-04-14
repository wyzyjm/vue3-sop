import { ref } from '@vue/composition-api'
import request from '@/api/2363-get-frontapi-service-provider-org-get-orgenum'
export default () => {
    if (request.options) {
        return request.options
    }
    const options = ref([])

    request().then((response) => {
        options.value = response.data
        request.options = options
    })

    return options
}
