
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1542
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id查询业务流程信息
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number                  
  businessFlowName:string    
  businessFlowCode:string    
  version:string             
  flowWorkDefId:string       
  flowWorkDefName:string     
  status:string              
  statusName:string          
  creater:string             
  createrName:string         
  creatreTime:number         
  updater:string             
  updaterName:string         
  updateTime:number          
  describe:string            
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqParams {
  id:string    /**业务流程定义id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}