import { reactive } from '@vue/composition-api'
import getProviderList from '@/api/1306-get-frontapi-service-provider-pagelist'
import getRoleList from '@/api/1348-get-common-service-role-list'

export default () => {

    const options = reactive({
        providerList: [],
        // orgList: [],
        roleList: [],
    })
    getProviderList({pageSize:-1}).then(({ data }) => {
        options.providerList = data.records
    })
    getRoleList({pageSize:-1}).then(({ data }) => {
        options.roleList = data.records
    }) 
    return options
}