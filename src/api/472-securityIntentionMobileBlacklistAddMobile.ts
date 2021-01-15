
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/472
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：意向手机号黑名单-添加手机号
 */
export interface ResBody {
  status:number    //返回成功码101
  msg:string       //信息描述
}

export interface ReqQuery {
  mobile:string           //手机号
  blacklistType:string    //类型
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/intentionMobileBlacklist/addMobile',
        method:'GET',
        params:params
    })
}