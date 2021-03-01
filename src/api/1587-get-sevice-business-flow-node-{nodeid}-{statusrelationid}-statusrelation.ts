
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1587
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id获取服务单状态关联关系
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number                        
  businessNodeId:string            
  businessNodeCode:string          
  businessNodeStatus:string        
  businessNodeStatusName:string    
  serviceOrderStatus:number        
  serviceOrderStatusName:string    
  sortOrder:number                 
  createTime:string                
  creater:string                   
  updater:string                   
  updateTime:string                
  status:number                    
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqParams {
  nodeId:string              /**业务节点id*/
  statusRelationId:string    /**关联关系id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/{nodeId}/{statusRelationId}/statusRelation'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}