
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1090
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户实名认证详情
 */
export interface VerifiedEntity {
  id:number                            
  membercode:string                    
  custId:string                        //客户ID
  companyName:string                   //企业名称
  authType:number                      //认证类型:1为企业认证,0为个人认证
  validEndTime:string                  //经营期限
  socialCreditCode:string              //统一社会信用代码
  legalPerson:string                   //法人
  registeredCapital:string             //注册资本
  enterpriseOrganizationType:string    //企业组织类型
  address:string                       //住所
  establishedTime:string               //成立日期
  personalName:string                  //企业认证的实名代理人字段和个人认证的个人姓名字段都取这一个
  idNumber:string                      //身份证号码
}

export interface Data {
  verifiedEntity:VerifiedEntity    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  custId:string    //客户Id
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/newcustomerdetail/getVerifyInfoDetail',
        method:'GET',
        params:params
    })
}