
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1506
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：新增流程
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqBody {
  businessFlowName?:string    /**业务流程名称*/
  businessFlowCode?:string    /**业务流程code*/
  flowWorkDefId?:string       /**工作流程定义id*/
  describe?:string            /**描述*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/add',
        method:'POST',
        data:params
    })
}