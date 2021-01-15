
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1008
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：意向判断-写跟进-获取客户意向-潘昭
 */
export interface Data {
  items:array    //返回结果对象的集合
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  empId:string    //员工ID
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/visitlog/getCustDemands',
        method:'GET',
        params:params
    })
}