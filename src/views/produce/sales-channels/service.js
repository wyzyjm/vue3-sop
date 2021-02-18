import axios from '@/plugins/axios'
export const getTableData = (params) => {
    
    return axios({
        url:'/security/flowwork/queryFlowWork',
        params: params
    })
}