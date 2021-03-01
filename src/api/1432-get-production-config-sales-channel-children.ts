
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1432
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取父渠道下的子渠道
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  parentId:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/sales-channel/children',
        method:'GET',
        params:params
    })
}