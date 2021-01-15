
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/966
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：意向判断-写跟进-潘昭
 */
export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:null        
}

export interface ReqQuery {
  empId:string            //员工ID
  requestParams:string    //custId：客户Id；【必传】
custName：客户名称；【必传】
visitType：跟进方式；【必传】
nextVisitTimeStr：下次跟进时间（yyyy-MM-dd HH:mm）；
linkManId：联系人ID；
linkManName：联系人名称；
content：跟进记录；
accompanySalerId：陪访人ID；
accompanySalerDeptId：陪访人部门ID；
entId：企业ID；
salesStage：销售阶段；【非线索客户时必传】
clueVisitStage：线索跟进状态；【线索客户时必传】
ids：附件ID的拼接；
custDemands：客户需求；
type：跟进客户的类型（1：正式客户；2：线索客户）;【必传】
expectDealAmountStr：预计成交金额。
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/visitlog/saveVisitLog',
        method:'GET',
        params:params
    })
}