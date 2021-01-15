
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/716
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-CE·O积分-潘昭
 */
export interface Data {
  ranking:number            //排名
  totalRanking:number       //全国总排名
  integral:number           //本月积分
  historyIntegral:number    //历史积分
  totalIntegral:number      //总积分
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface RequestParams {
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getIntegralEmployee',
        method:'POST',
        data:params
    })
}