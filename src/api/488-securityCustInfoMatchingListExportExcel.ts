
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/488
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户名称匹配-下载
 */
export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //消息描述
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/custInfoMatchingList/exportExcel',
        method:'GET',
        params:params
    })
}