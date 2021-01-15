
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/624
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-跟进客户列表（总、经、商）-王志军
 */
export interface Data {
  totalCount:number     
  pageSize:number       
  list:array            
  currentPage:number    
  totalPages:number     
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //salesStage说明：销售阶段 对应的枚举值DICT_SALES_STAGE
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/potential/findProtectCusts',
        method:'GET',
        params:params
    })
}