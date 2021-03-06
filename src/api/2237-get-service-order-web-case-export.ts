
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2237
 * 生成日期：Wed Mar 24 2021 10:38:31 GMT+0800 (中国标准时间)
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