
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1318
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：修改组织状态
 * 创建人：付兵浩
 */
export interface ResBody {
  data:string      
  code:string      
  status:string    
}

export interface ReqQuery {
  id:string        /**组织id*/
  status:string    /**状态1为启用0为禁用*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/change-status',
        method:'GET',
        params:params
    })
}