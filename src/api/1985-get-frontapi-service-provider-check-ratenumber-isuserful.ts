
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1985
 * 生成日期：Tue Mar 16 2021 14:36:38 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：检查纳税人识别号是否可用
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:boolean     /**true表示可用，false表示不可用*/
}

export interface ReqQuery {
  ratenumber:string    /**纳税人识别号*/
  id?:string           /**服务商id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/check-ratenumber-isuserful',
        method:'GET',
        params:params
    })
}