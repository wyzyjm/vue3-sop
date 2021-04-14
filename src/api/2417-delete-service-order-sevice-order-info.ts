
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2417
 * 生成日期：Tue Mar 30 2021 09:57:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-根据服务详情code删除
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info',
        method:'DELETE',
        params:params
    })
}