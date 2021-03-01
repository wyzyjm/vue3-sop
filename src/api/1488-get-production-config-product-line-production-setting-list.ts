
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1488
 * 生成日期：Mon Mar 01 2021 11:01:22 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：列表
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  productLineId:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/product-line/production-setting/list',
        method:'GET',
        params:params
    })
}