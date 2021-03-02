
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1398
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：资源下拉列表
 * 创建人：肖晓华
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
    return request({
        url:'/resource/drop/down/list',
        method:'GET',
        params:params
    })
}