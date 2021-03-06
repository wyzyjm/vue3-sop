
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1775
 * 生成日期：Thu Mar 11 2021 13:17:11 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据当前用户获取组织树
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  resourceCode:string    /**菜单code*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-org/orglist-by-loginuser',
        method:'GET',
        params:params
    })
}