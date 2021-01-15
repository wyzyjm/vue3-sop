
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/534
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：产品吐槽-查询可以吐槽的产品-潘昭
 */
export interface Data {
  list:array    //数据列表
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //结果集
}

export interface ReqQuery {
  exception:string    
}

export interface RequestParams {
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqQuery,ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/productTucao/selectProductTucaoConfigList',
        method:'POST',
        data:params
    })
}