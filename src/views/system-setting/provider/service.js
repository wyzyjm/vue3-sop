import axios from '@/plugins/axios'
// 获取服务商列表
export const getProviderList = (params) => {
    
    return axios({
        baseURL: 'http://10.12.52.224:3000/mock/123',
        url:'/frontApi/service-provider-employee/list',
        params: params
    })
}