
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/664
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-区总调拨-调拨线索客户（区）-王志军
 */
export interface ResBody {
  status:number    //101是调拨成功，其他都是失败
  msg:string       
  data:string      
}

export interface ReqQuery {
  empId:string            
  exception:string        
  requestParams:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/assginMarket/doClueAssgin',
        method:'GET',
        params:params
    })
}