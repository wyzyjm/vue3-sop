
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1398
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：资源下拉列表
 */
export interface Data {
  resourceType:any[]       /**角色组*/
  resourceUrlType:any[]    /**服务商是否可见*/
  state:any[]              /**状态*/
}

export interface ResBody {
  code:null        
  data:Data        
  msg:null         
  status:number    
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    const url = '/resource/drop/down/list'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'GET',
        params:params
    })
}