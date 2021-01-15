
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/628
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-添加客户-检查客户是否存在-王志军
 */
export interface Data {
  isExist:boolean    //true or false
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //custType说明：1是企业 2是个人

custIdentify：客户名称或者证件号码  custType=1就是客户名称，否则证件号码 

custCertificatesType 枚举值是D_CERTTYPE
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer/checkCustIsExist',
        method:'GET',
        params:params
    })
}