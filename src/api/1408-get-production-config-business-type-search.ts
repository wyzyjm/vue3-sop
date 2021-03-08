
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1408
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：搜索
 * 创建人：杨一点
 */
export interface Data {
  records:any[]          
  total:number           
  size:number            
  current:number         
  orders:any[]           
  searchCount:boolean    
  pages:number           
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  name?:string        
  status?:string      /**1启用 2停用*/
  pageSize?:string    
}

export interface ReqBody {
}

interface _Params extends ReqQuery,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/business-type/search',
        method:'GET',
        params:params
    })
}