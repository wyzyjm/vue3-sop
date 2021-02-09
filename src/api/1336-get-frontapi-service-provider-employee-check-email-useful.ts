
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1336
 * 生成日期：Mon Feb 08 2021 10:23:32 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：检查邮箱是否可用
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示可用，其它不可用*/
  status:string    
}

export interface ReqQuery {
  email:string         /**邮箱*/
  providerId:string    /**服务商id*/
  id?:string           /**员工id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-employee/check-email-useful',
        method:'GET',
        params:params
    })
}