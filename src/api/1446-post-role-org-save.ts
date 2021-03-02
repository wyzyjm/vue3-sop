
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1446
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：生产组织授权-保存
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      /**code值*/
  data:boolean     /**数据*/
  msg:string       /**消息说明*/
  status:number    /**状态值*/
}

export interface ReqBody {
  orgId?:string         
  orgType?:number       
  roleId?:number        
  sourceId?:number      
  sourceType?:number    
  type?:number          
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params[])=> { 
    return request({
        url:'/role/org/save',
        method:'POST',
        data:params
    })
}