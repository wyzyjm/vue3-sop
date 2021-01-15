
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/700
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：全景信息-通过客户名称返回entId-潘昭
 */
export interface Data {
  entId:string    //企业id
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:?string       
}

export interface RequestParams {
  custName:string    //客户名称
}

export interface ReqBody {
  empId:string                   //登录人ID
  requestParams:RequestParams    //请求参数
}

interface Params extends ReqQuery,ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/newcustomerdetail/entNameExcuteFind',
        method:'GET',
        params:params
    })
}