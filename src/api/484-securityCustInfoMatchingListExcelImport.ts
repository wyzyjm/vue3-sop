
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/484
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称： 客户名称匹配-上传
 */
export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //消息描述
}

export interface ReqQuery {
  file:string    //文件
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/custInfoMatchingList/excelImport',
        method:'GET',
        params:params
    })
}