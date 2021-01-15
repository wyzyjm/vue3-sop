
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1040
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-申请记录-合同文本号-肖瑞海
 */
export interface Vo {
  id:string            //合同文本记录id
  contractId:string    //合同ID
  textCode:string      //合同文本号
  creater:string       //创建人
  createDate:number    //创建时间
  auditer:string       //审核人
  auditDate:number     //审核时间
  state:number         //状态
  fileFlag:number      //文件标志
  operId:string        //合同操作记录ID
  fileList:array       //文件列表
  auditState:null      //审核状态
  auditRemark:null     //审核备注
  subId:null           //分司ID
}

export interface Data {
  vo:Vo    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    // 审核记录 id
  empId:string            
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractLink/auditInit',
        method:'GET',
        params:params
    })
}