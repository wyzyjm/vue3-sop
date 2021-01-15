
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/724
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩排名-潘昭
 */
export interface Data {
  countryRank:number    //全国排名
  areaRank:number       //区域排名
  subRank:string        //分司排名
  deptRank:string       //部门排名
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  empId:string            //登录员工的ID
  requestParams:string    //传参的对象，没有则{}
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
        url:'/entwxapi/homepage/getRanking',
        method:'GET',
        params:params
    })
}