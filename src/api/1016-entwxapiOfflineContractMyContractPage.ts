
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1016
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-我的合同-肖瑞海
 */
export interface Data {
  totalCount:number     //记录总数
  pageSize:number       //每页记录数
  list:array            
  currentPage:number    
  totalPages:number     //总页数
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/myContract/page',
        method:'GET',
        params:params
    })
}