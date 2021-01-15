
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/520
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-待分配客户列表（总、经）-王志军
 */
export interface Data {
  totalCount:number     
  pageSize:number       
  list:array            
  currentPage:number    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    //custAssignType说明：1是商机 2是线索 4是保护 5是成交客户
custName，bussdeptId，salerId可以不传
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/assign/findWillAssignList',
        method:'GET',
        params:params
    })
}