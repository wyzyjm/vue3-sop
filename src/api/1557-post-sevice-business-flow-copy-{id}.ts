
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1557
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：复制流程
 * 创建人：wuzongle@300.cn
 */
export interface Field_29 {
}

export interface ResBody {
  data:string          
  status:string        
  msg:string           
  field_29:Field_29    
}

export interface ReqParams {
  id:string    /**业务流程定义id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/copy/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}