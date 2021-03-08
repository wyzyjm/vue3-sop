
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1330
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：检查组织code是否可用
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示可用，其他不可用*/
  code:string      /**SYS000表示请求成功*/
  status:string    
}

export interface ReqQuery {
  orgCode:string    /**组织code*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/check-orgid-useful',
        method:'GET',
        params:params
    })
}