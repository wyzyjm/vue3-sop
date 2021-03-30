
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2393
 * 生成日期：Fri Mar 26 2021 17:12:12 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：查看评价
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  orderId:number              
  orderCode:string            /**服务单号*/
  serviceScore:number         
  serviceScoreCount:number    
  designScore:number          
  designScoreCount:number     
  makeScore:number            
  makeScoreCount:number       
  totalScore:number           
  evaluateContent:string      
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/get_customer_score',
        method:'GET',
        params:params
    })
}