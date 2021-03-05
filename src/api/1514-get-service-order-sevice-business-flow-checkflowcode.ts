
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1514
 * 生成日期：Fri Mar 05 2021 10:40:11 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：验证服务流程编码是否唯一
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqQuery {
  businessFlowCode:string    
}

export interface ReqBody {
  businessFlowCode:string    /**业务流程编码*/
}

interface _Params extends ReqQuery,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/checkFlowCode',
        method:'GET',
        params:params
    })
}