
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/568
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：竞争对手-类型筛选项-潘昭
 */
export interface Data {
  types:array    //类型的集合
}

export interface ResBody {
  status:string    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqBody {
  empId:string            //登录员工的ID
  requestParams:string    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/competitor/getTypes',
        method:'POST',
        data:params
    })
}