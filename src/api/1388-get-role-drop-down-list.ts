
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1388
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：角色管理下拉列表
 */
export interface Data {
  roleGroup:any[]      /**角色组*/
  qtDesigner:any[]     /**关联设计器*/
  isSpVisible:any[]    /**服务商是否可见*/
  state:any[]          /**状态*/
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
    const url = '/role/drop/down/list'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'GET',
        params:params
    })
}