import { reactive } from '@vue/composition-api'
import getDropDownList from '@/api/1398-get-common-service-resource-drop-down-list'
export default () => {
    if (getDropDownList.options) {
        return getDropDownList.options
    }
    const options = reactive({
        resourceType: [],
        resourceUrlType: [],
        state: [],
    })


    Promise.all([getDropDownList()]).then((response) => {
        options.resourceType = response[0].data.resourceType
        options.resourceUrlType = response[0].data.resourceUrlType
        options.state = response[0].data.state
        getDropDownList.options = options
    })
    return options
}
