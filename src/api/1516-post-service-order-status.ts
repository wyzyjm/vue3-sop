
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1516
 * 生成日期：Mon Feb 08 2021 10:23:11 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

export interface ReqBody {
  name?:string           
  code?:string           
  status?:number         
  description?:string    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order-status',
        method:'POST',
        data:params
    })
}