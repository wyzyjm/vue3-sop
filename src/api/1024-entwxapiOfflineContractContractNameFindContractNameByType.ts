
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1024
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-按类型查询合同名称
 */
export interface Data {
  contractNameList:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //合同类型code
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractName/findContractNameByType',
        method:'GET',
        params:params
    })
}