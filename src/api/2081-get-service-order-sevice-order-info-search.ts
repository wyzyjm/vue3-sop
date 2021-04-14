
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2081
 * 生成日期：Fri Mar 19 2021 09:32:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：我的服务-es列表查询
 * 创建人：杨一点
 */
export interface Data {
  totalHits:number            
  totalHitsRelation:string    
  maxScore:number             
  scrollId:null               
  searchHits:any[]            
  aggregations:null           
  empty:boolean               
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/search',
        method:'GET',
        params:params
    })
}