
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1609
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：产品列表
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
        url:'/production-config/product/list',
        method:'GET',
        params:params
    })
}