
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1577
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：删除服务单状态
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
  nodeId:string              /**节点id*/
  statusRelationId:string    /**服务单状态关联关系id*/
}

export interface ReqBody {
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/{nodeId}/{statusRelationId}/statusRelation'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'DELETE',
        params:params
    })
}