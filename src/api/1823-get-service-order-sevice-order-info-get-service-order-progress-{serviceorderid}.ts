
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1823
 * 生成日期：Thu Mar 11 2021 13:17:12 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-服务单进度
 * 创建人：肖晓华
 */
export interface ReqParams {
  serviceOrderId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/get/service/order/progress/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}