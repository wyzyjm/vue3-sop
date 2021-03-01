
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1562
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：初始化业务阶段
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:any[]       
}

export interface ReqParams {
  businessFlowId:string    
}

export interface ReqBody {
  businessFlowNodeType:string    /**节点类型*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/init/{businessFlowId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}