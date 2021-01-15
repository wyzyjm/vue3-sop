
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/566
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：竞争对手-添加-潘昭
 */
export interface ResBody {
  status:number    //状态码，接口请求成功返回101
  msg:string       //消息描述
  data:string      //结果集
}

export interface RequestParams {
  name:string           //全称
  nameJianpin:string    //简称
  type:string           //类型
  status:string         //状态
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/competitor/saveCompetitor',
        method:'POST',
        data:params
    })
}