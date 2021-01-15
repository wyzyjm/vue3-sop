
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1026
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-合同申领-申领记录-肖瑞海
 */
export interface Data {
  totalCount:number     //记录数
  pageSize:number       //每页数
  data:array            
  currentPage:number    //当前页
  totalPages:number     //总页
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
        url:'/entwxapi/offline/contract/contractReqest/findRequestPage',
        method:'GET',
        params:params
    })
}