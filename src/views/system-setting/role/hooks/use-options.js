import { reactive } from '@vue/composition-api'
import getRoleDropDownList from '@/api/1388-get-common-service-role-drop-down-list'
import getDropDownList from '@/api/1422-get-common-service-role-resource-drop-down-list'

export default () => {
    if (getRoleDropDownList.options) {
        return getRoleDropDownList.options
    }
    const options = reactive({
        roleGroup: [],
        qtDesigner: [],
        state: [],
        isSpVisible: [],
        dropList:[]
    })


    Promise.all([getDropDownList(), getRoleDropDownList()]).then((response) => {
        options.roleGroup = response[1].data.roleGroup
        options.qtDesigner = response[1].data.qtDesigner
        options.state = response[1].data.state
        options.isSpVisible = response[1].data.isSpVisible
        options.dropList = response[0].data.permission
        getRoleDropDownList.options = options
    })

    return options
}
