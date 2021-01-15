
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1020
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-合同申领-保存-肖瑞海
 */
export interface ResBody {
  status:number    
  msg:string       
}

export interface ReqQuery {
  requestParams:string    //说明: {"requestNum":申请数量,"contractTypeCode":"合同类型code","contractTypeName":"合同类型名","contractTypeCodeName":"mhy_type,门户云合同","contractCodeName":"mhy_wm, 门户云（外贸）产品技术服务协议 ","contractCode":合同名code,"contractName":合同名称 ","remark":"备注"}
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractReqest/saveRequest',
        method:'GET',
        params:params
    })
}