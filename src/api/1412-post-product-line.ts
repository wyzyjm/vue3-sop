
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1412
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加产品线
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
  businessTypeIdList?:any[]    
  salesChannelIdList?:any[]    
  sdfdsfds?:number             
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/product-line',
        method:'POST',
        data:params
    })
}