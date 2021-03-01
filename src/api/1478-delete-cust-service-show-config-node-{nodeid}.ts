
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1478
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：删除客户呈现阶段节点
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqParams {
  nodeId:string    /**节点id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/node/{nodeId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'DELETE',
        params:params
    })
}