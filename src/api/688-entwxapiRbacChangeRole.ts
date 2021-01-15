
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/688
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-切换角色-郭强
 */
export interface Data {
}

export interface ResBody {
  status:number    //状态码（101-成功）
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:?string       
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/rbac/changeRole',
        method:'GET',
        params:params
    })
}