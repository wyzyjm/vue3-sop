
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/470
 * 生成日期：Thu Jan 28 2021 15:39:23 GMT+0800 (GMT+08:00)
 * 生成工具版本：js-v0.1
 * 接口名称：意向手机号黑名单-黑名单列表
 */
export interface Data {
  pageSize: number       /**每页大小*/
  data: any[]            /**返回结果的对象集合*/
  currentPage: number    /**当前页码*/
  totalPages: number     /**总页数*/
}

export interface ResBody {
  status: number    /**状态码，101为成功*/
  msg: string       /**消息描述*/
  data: Data        /**返回结果对象*/
}

export interface ReqQuery {
  currentPage?: string    /**当前页码*/
  pageSize?: string       /**每页大小*/
}

interface _Params extends ReqQuery { }

import request from '../plugins/axios/index.js'
export default (params: _Params) => {
  return request({
    url: '/security/intentionMobileBlacklist/list',
    method: 'GET',
    params: params
  })
}