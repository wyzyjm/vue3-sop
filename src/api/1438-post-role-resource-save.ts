
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1438
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：功能授权-保存
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      /**code值*/
  data:boolean     /**数据*/
  msg:string       /**消息说明*/
  status:number    /**状态值*/
}

export interface ReqBody {
  permissionCode?:string    
  resourceCode?:string      
  roleId?:string            
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params[])=> { 
    return request({
        url:'/role/resource/save',
        method:'POST',
        data:params
    })
}