
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1494
 * 生成日期：Mon Mar 08 2021 10:15:05 GMT+0800 (GMT+08:00)
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
  status:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product/search',
        method:'GET',
        params:params
    })
}