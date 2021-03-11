
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1859
 * 生成日期：Thu Mar 11 2021 14:32:54 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：网站列表
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  custId:string    /**客户id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/website-list-by-custid',
        method:'GET',
        params:params
    })
}