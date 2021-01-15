
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/666
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：总监部门商务相关接口（看下面的备注）-王志军
 */
export interface ResBody {
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/orgapp/lookremark',
        method:'GET',
        params:params
    })
}