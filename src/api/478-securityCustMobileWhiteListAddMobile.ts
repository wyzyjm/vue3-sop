
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/478
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户手机号白名单-添加手机号
 */
export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //信息描述
}

export interface ReqQuery {
  mobile:string        //手机号
  allowedNum:string    //放行数量
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/custMobileWhiteList/addMobile',
        method:'GET',
        params:params
    })
}