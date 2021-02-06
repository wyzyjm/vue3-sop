
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1412
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加产品线
 */
export interface ResBody {
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
    const url = '/product-line'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'POST',
        data:params
    })
}