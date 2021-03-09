import { reactive } from '@vue/composition-api'
import getRoleDropDownList from '@/api/1388-get-common-service-role-drop-down-list'

export default () => {
    if (getRoleDropDownList.options) {
        return getRoleDropDownList.options
    }
    const options = reactive({
        roleGroup: [],
        qtDesigner: [],
        state: [],
        isSpVisible: []
    })
    getRoleDropDownList().then(({ data }) => {
        options.roleGroup = data.roleGroup
        options.qtDesigner = data.qtDesigner
        options.state = data.state
        options.isSpVisible = data.isSpVisible
        getRoleDropDownList.options = options
    })

    return options
}