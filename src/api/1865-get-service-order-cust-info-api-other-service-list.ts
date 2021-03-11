
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1865
 * 生成日期：Thu Mar 11 2021 14:32:54 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：查询设计，运营、翻译 服务接口
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  custId:string       /**客户id*/
  productId:string    /**类型id，设计服务：107，运营服务：169，翻译服务：68*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/other-service-list',
        method:'GET',
        params:params
    })
}