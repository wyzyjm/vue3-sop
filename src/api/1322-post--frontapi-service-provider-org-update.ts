
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1322
 * 生成日期：Sun Feb 07 2021 11:03:02 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：更改组织基本信息
 */
export interface ResBody {
  data:string      
  code:string      
  status:string    
}

export interface ReqBody {
  id:string         /**组织id*/
  orgName:string    /**组织名称*/
  remark:string     /**备注*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'//frontApi/service-provider-org/update',
        method:'POST',
        data:params
    })
}