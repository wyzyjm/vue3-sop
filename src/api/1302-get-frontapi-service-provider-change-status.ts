
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1302
 * 生成日期：Tue Mar 16 2021 10:27:36 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：改变服务商状态
 * 创建人：付兵浩
 */
export interface ResBody {
  status:string    
  code:string      
  data:string      /**true表示成功，false表示失败*/
}

export interface ReqQuery {
  status:string    
  id:string        
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/change-status',
        method:'GET',
        params:params
    })
}