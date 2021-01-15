
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1012
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：黑名单-类型换成字典表获取-潘昭
 */
export interface Data {
  list:array    //返回结果对象的集合
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/intentionMobileBlacklist/getBlacklistTypes',
        method:'GET',
        params:params
    })
}