
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1829
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：我的服务-列表查询-展开
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      
  data:any[]       
  msg:string       
  status:number    
}

export interface ReqParams {
  serviceOrderId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/get/service/product/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}