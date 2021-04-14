
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2399
 * 生成日期：Sat Mar 27 2021 20:56:12 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取网站制作工具地址
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  serviceOrderCode:string    /**服务单code*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/urlList',
        method:'GET',
        params:params
    })
}