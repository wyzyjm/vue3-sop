
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2141
 * 生成日期：Fri Mar 19 2021 09:32:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：操作日志
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  records:any[]          
  total:number           
  size:number            
  current:number         
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
  userAccount?:string         /**操作账号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/operatelog',
        method:'GET',
        params:params
    })
}