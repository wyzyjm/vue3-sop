
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1100
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：手机号邮箱查询工具-郭强
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  contactNum:string     //手机或邮箱
  contactType:string    //2手机；6邮箱
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/newcustomer/findCustMobileEmailTools',
        method:'GET',
        params:params
    })
}