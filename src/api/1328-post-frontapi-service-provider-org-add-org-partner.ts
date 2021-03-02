
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1328
 * 生成日期：Tue Mar 02 2021 10:40:41 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加合作组织
 * 创建人：付兵浩
 */
export interface ResBody {
  data:string    
  code:string    
  msg:string     
}

export interface ReqBody {
  sourceOrgId:string     
  partnerOrgIds:any[]    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/add-org-partner',
        method:'POST',
        data:params
    })
}