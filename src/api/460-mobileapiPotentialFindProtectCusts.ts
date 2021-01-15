
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/460
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：意向判断列表
 */
export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/mobileapi/potential/findProtectCusts',
        method:'GET',
        params:params
    })
}