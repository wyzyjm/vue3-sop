
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1422
 * 生成日期：Sat Feb 06 2021 16:49:39 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：功能授权下拉列表
 */
export interface Data {
  permission:any[]    /**权限*/
  state:any[]         /**状态*/
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
    return request({
        url:'/role/resource/drop/down/list',
        method:'GET',
        params:params
    })
}