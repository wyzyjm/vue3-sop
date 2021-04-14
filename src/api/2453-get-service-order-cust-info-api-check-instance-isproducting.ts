
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2453
 * 生成日期：Thu Apr 01 2021 17:11:52 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据实例code检查该实例是否在生产
 * 创建人：付兵浩
 */
export interface ResBody {
  status:string    
  code:string      
  msg:string       
  data:boolean     /**true表示正在生产中，false表示没有在生产中*/
}

export interface ReqQuery {
  instanceCode:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-info-api/check-instance-isproducting',
        method:'GET',
        params:params
    })
}