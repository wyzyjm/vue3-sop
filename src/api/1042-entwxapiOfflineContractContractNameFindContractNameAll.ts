
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1042
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-合同名称列表
 */
interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractName/findContractNameAll',
        method:'GET',
        params:params
    })
}