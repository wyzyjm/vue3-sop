
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1572
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加服务单状态
 * 创建人：wuzongle@300.cn
 */
export interface Data {
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqParams {
  nodeId:string    /**业务节点id*/
}

export interface ReqBody {
  serviceOrderStatus:number         /**服务单状态*/
  sortOrder:number                  /**序号*/
  BusinessNodeStatusArray:string    /**业务节点状态，可以是多个，用,逗号隔开*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/node/{nodeId}/addStatus'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}