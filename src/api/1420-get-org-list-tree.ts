
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1420
 * 生成日期：Sat Feb 06 2021 16:49:39 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：生产组织授权-组织树
 */
export interface ResBody {
  code:string      
  data:any[]       
  msg:string       
  status:number    
}

export interface ReqQuery {
  sourceId:string      
  sourceType:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/org/list/tree',
        method:'GET',
        params:params
    })
}