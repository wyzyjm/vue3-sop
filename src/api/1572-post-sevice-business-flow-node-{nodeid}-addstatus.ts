
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1572
 * 生成日期：Wed Feb 24 2021 10:44:30 GMT+0800 (GMT+08:00)
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
  nodeId:number    /**业务节点id*/
}

export interface ReqBody {
  nodeId:number                /**业务节点id*/
  serviceOrderStatus:number    /**服务单状态*/
  sortNum:number               /**序号*/
  businessNodeStatus:string    /**业务节点状态，可以是多个，用,逗号隔开*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/{nodeId}/addStatus'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}