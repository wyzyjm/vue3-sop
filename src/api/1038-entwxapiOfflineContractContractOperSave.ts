
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1038
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-申请记录-审核保存-肖瑞海
 */
export interface ResBody {
  status:string    //状态
  msg:string       //提示信息
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractOper/save',
        method:'GET',
        params:params
    })
}