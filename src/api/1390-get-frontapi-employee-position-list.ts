
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1390
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：职位列表接口
 * 创建人：付兵浩
 */
export interface ResBody {
  code:string      /**SYS000表示请求成功*/
  data:any[]       /**结果集*/
  msg:string       
  status:number    
}

export interface ReqQuery {
  name?:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/employee-position/list',
        method:'GET',
        params:params
    })
}