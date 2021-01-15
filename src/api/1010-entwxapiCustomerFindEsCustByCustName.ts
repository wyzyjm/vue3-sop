
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1010
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：ES模糊搜索-王志军
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer/findEsCustByCustName',
        method:'GET',
        params:params
    })
}