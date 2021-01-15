
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/660
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-区总调拨-检验区总调拨当月额度（区）-王志军
 */
export interface ResBody {
  status:number    //如果code为101,表示可调拨，其他的均不可调拨，并将msg展示出来
  msg:string       
  data:string      
}

export interface ReqQuery {
  empId:string        
  exception:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/assginMarket/checkAssginState',
        method:'GET',
        params:params
    })
}