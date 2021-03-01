
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1514
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：验证服务流程编码是否唯一
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqBody {
  businessFlowCode:string    /**业务流程编码*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/checkFlowCode',
        method:'POST',
        data:params
    })
}