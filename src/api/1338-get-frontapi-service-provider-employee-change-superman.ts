
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1338
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：开通或者关闭超级管理
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示成功，其它失败*/
  status:string    
}

export interface ReqQuery {
  id:string          /**唯一标识*/
  superman:string    /**是否超级管理员(1是0否)*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-employee/change-superman',
        method:'GET',
        params:params
    })
}