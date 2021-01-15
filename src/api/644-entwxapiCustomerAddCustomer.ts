
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/644
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-添加客户（商）-王志军
 */
export interface CustomerVo {
  custId:string    //客户ID
}

export interface Data {
  customerVo:CustomerVo    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //custType说明：1是企业 2是个人

custNameCn：客户名称 custType=2时，需要拼一个客户名称，格式：姓名（证件类型CODE：证件号码）

custCertificatesType 枚举值是D_CERTTYPE

industryClassBig和industryClassSmall枚举值是D_INDUSTRY_BIGDATA

linkManVoList说明：联系人，按照原型只需要传一个联系人

contactInfoVoList 联系方式列表，按照原型，只需要传一个contactType=2的手机号码
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer//addCustomer',
        method:'GET',
        params:params
    })
}