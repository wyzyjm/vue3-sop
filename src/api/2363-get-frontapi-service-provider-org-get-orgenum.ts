
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/2363
 * 生成日期：Wed Mar 24 2021 14:05:26 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：组织枚举
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/get-orgenum',
        method:'GET',
        params:params
    })
}