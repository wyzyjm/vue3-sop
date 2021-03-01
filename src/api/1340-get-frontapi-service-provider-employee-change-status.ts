
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1340
 * 生成日期：Mon Mar 01 2021 12:29:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：启用、停用员工
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示成功，其它失败*/
  status:string    
}

export interface ReqQuery {
  id:string        /**员工唯一标识*/
  status:string    /**1启用0禁用*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-employee/change-status',
        method:'GET',
        params:params
    })
}