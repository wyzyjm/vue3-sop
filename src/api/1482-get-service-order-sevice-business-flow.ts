
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1482
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务流程列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  businessFlowName?:string    /**服务流程名称*/
  status?:string              /**状态*/
  flowWorkDefName?:string     /**关联工作流*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow',
        method:'GET',
        params:params
    })
}