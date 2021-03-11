
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1853
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据客户名称搜索
 * 创建人：付兵浩
 */
export interface Data {
  custName:string    /**key为客户id，value为客户名称*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  custName:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/search-cust',
        method:'GET',
        params:params
    })
}