
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1500
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：可供选择的服务产品类型列表
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
        url:'/service-product/type/list',
        method:'GET',
        params:params
    })
}