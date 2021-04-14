
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2537
 * 生成日期：Tue Apr 06 2021 17:41:41 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：所有原始数据
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  records:any[]          
  total:number           
  size:number            
  current:number         
  orders:any[]           
  searchCount:boolean    
  pages:number           
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  serviceOrderCode?:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/push-sevice-order/list',
        method:'GET',
        params:params
    })
}