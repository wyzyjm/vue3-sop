
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1404
 * 生成日期：Tue Mar 09 2021 13:47:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加业务类型
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

export interface ReqBody {
  name:string       
  code:string       
  status?:number    /**1启用 2停用*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/business-type',
        method:'POST',
        data:params
    })
}