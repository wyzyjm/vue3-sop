
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2447
 * 生成日期：Thu Apr 01 2021 17:11:52 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据客户id和产品类型获取账户列表
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  custId:string           
  operProductId:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api//all-account-list-by-custid',
        method:'GET',
        params:params
    })
}