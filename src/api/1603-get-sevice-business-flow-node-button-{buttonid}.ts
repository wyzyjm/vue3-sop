
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1603
 * 生成日期：Mon Mar 01 2021 14:58:09 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id获取按钮信息
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number                         
  businessNodeId:string             
  serviceStatusRelationId:string    
  businessNodeStatus:string         
  buttonCode:string                 
  buttonName:string                 
  useScence:string                  
  orderNum:number                   
  creater:string                    
  createTime:string                 
  updater:string                    
  updateTime:string                 
  status:number                     
  buttonAuthority:number            
  bindForms:string                  
  eventAction:string                
  actionResult:string               
  executorType:number               
  executor:string                   
  serviceOrderStatus:number         
}

export interface ResBody {
  code:string      
  status:string    
  msg:string       
  data:Data        
}

export interface ReqParams {
  buttonId:string    /**按钮id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/button/{buttonId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}