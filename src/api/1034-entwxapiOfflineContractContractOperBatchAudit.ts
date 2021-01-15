
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1034
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-申请记录-批量审核-肖瑞海
 */
export interface ResBody {
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractOper/batchAudit',
        method:'GET',
        params:params
    })
}