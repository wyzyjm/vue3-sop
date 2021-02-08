
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1324
 * 生成日期：Sun Feb 07 2021 15:27:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：移动组织
 */
export interface ResBody {
  data:string      
  code:string      
  status:string    
}

export interface ReqQuery {
  id:string          /**要移动的组织id*/
  parentId:string    /**移动到的父级组织id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-org/move_org',
        method:'GET',
        params:params
    })
}