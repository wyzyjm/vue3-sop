
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1502
 * 生成日期：Mon Feb 08 2021 10:23:11 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：可供选择的服务产品单位列表
 * 创建人：杨一点
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
        url:'/service-product/unit/list',
        method:'GET',
        params:params
    })
}