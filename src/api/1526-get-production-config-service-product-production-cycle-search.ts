
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1526
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
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
  optimizeCountSql:boolean    
  hitCount:boolean            
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
  serviceProductName?:string              
  serviceProductCode?:string              
  serviceProductCreateTimeFrom?:string    
  serviceProductCreateTimeTo?:string      
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product/production-cycle/search',
        method:'GET',
        params:params
    })
}