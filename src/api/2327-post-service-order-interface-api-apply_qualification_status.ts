
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2327
 * 生成日期：Fri Mar 26 2021 10:21:10 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：客户选择是否需要协助资质申请
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:boolean     
}

export interface ReqBody {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/apply_qualification_status',
        method:'POST',
        data:params
    })
}