
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1082
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-意向判断-分配
 */
export interface ResBody {
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/potential/managerAssignOwnCust',
        method:'GET',
        params:params
    })
}