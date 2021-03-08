
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1635
 * 生成日期：Mon Mar 08 2021 10:15:05 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：预制属性列表
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
        url:'/production-config/service-product/property/prepared/list',
        method:'GET',
        params:params
    })
}