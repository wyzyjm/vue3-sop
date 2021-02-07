
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1408
 * 生成日期：Sun Feb 07 2021 10:34:35 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：搜索
 */
export interface ReqQuery {
  name:string        
  status:string      
  pageSize:string    
}

export interface ReqBody {
  name?:string        
  status?:number      
  pageSize?:number    
}

interface _Params extends ReqQuery,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/business-type/search',
        method:'GET',
        params:params
    })
}