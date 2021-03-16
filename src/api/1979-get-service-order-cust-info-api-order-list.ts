
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1979
 * 生成日期：Tue Mar 16 2021 10:07:36 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务单列表
 * 创建人：付兵浩
 */
export interface Data {
  current:number         
  orders:any[]           
  pages:number           
  records:any[]          
  searchCount:boolean    
  size:number            
  total:number           
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqQuery {
  pageSize?:string    
  pageNum?:string     
  custId:string       
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/order-list',
        method:'GET',
        params:params
    })
}