
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2147
 * 生成日期：Fri Mar 19 2021 09:32:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务单进度详情
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  orderId:number                
  orderCode:string              
  custId:string                 
  custName:null                 
  productId:number              
  productName:string            
  productDomain:string          
  productInstanceCode:string    
  createTime:string             
  updateTime:null               
  currentProgress:string        
  designerInfo:null             
  tel400Num:null                
  showStageDTOList:any[]        
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
        url:'/service-order/interface/api/process_detail',
        method:'GET',
        params:params
    })
}