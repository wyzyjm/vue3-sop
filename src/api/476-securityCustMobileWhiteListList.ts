
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/476
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户手机号白名单-白名单列表
 */
export interface Data {
  pageSize:number       //每页大小
  data:array            //返回数据集合
  currentPage:number    //当前页
  totalPages:number     //总页数
}

export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //消息描述
  data:Data        //返回对象
}

export interface ReqQuery {
  currentPage:?string    //当前页码
  pageSize:?string       //每页大小
  mobile:?string         //手机号
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/custMobileWhiteList/list',
        method:'GET',
        params:params
    })
}