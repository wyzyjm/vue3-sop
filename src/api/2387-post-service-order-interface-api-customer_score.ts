
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2387
 * 生成日期：Fri Mar 26 2021 17:06:06 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：客户评价
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:boolean     
}

export interface ReqBody {
  orderCode:string          /**服务单号*/
  serviceScore:number       /**服务能力评分*/
  designScore:number        /**设计能力评分*/
  makeScore:number          /**制作周期评分*/
  evaluateContent:string    /**评价内容*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/customer_score',
        method:'POST',
        data:params
    })
}