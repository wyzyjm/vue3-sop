
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2237
 * 生成日期：Tue Mar 23 2021 16:19:25 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：导出
 * 创建人：付兵浩
 */
export interface ResBody {
}

export interface ReqQuery {
  orgId?:string          /**选中的组织树的id，多个id用逗号分割*/
  serviceCode?:string    /**服务单号*/
}

export interface ReqBody {
  orgId?:string           /**选中的组织id集合，默认为null*/
  serviceCode?:string    /**服务单code*/
}

interface _Params extends ReqQuery,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/web-case/export',
        method:'GET',
        params:params
    })
}