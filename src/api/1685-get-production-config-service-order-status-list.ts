
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1685
 * 生成日期：Fri Mar 05 2021 10:40:11 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：所有服务订单状态列表
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
        url:'/production-config/service-order-status/list',
        method:'GET',
        params:params
    })
}