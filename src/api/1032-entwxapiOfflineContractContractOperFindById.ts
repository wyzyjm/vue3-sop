
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1032
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-申请记录-详情-肖瑞海
 */
export interface Data {
  id:string                   //申请记录ID
  contractId:string           //合同ID
  contractCode:string         //合同号
  contractTypeCode:string     //合同类型code
  contractNameCode:string     //合同名code
  operType:number             //操作类型
  operReason:string           //操作原因
  annexPath:string            //附件路径
  remark:string               //备注
  creater:string              
  createDate:number           
  allotArea:string            //调拨区域
  allotSub:string             //调拨分司
  allotDept:string            //调拨部门
  alloter:string              //调拨人
  auditer:string              //审核人
  auditDate:number            //审核时间
  auditState:number           //审核状态
  auditRemark:string          //审核备注
  subId:string                //分司ID
  statusBak:string            //上次状态
  operTypeLabel:string        //操作类型名
  createrName:null            //创建人
  auditStateLabel:string      //审核状态名
  contractTypeLabel:string    //合同类型名
  contractNameLabel:string    //合同名
  allotAreaLabel:string       //调拨区域名
  allotSubLabel:string        //调拨分司名
  allotDeptLabel:string       //调拨部门名
  alloterName:string          //调拨人名
  auditerName:null            //审核人名
  operReasonLabel:string      //操作原因名
  pullAnnexPath:null          //附件全路径
  annexPathName:null          //附件名
}

export interface Data {
  data:Data    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractOper/findById',
        method:'GET',
        params:params
    })
}