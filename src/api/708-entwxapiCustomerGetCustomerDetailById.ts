
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/708
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：成交客户的客户详情-基础信息-潘昭
 */
export interface Balance {
  accountBalance:string     //线下预存款余额
  transferBalance:string    //转账账户余额
}

export interface Customer {
  custId:string                         //客户ID
  entId:string                          //企业ID
  custNameCn:string                     //客户名称
  custIdNumber:string                   //客户证件号码
  custAddress:string                    //客户地址
  custAddressProvince:string            //省
  custAddressCountry:string             //国
  custAddressCity:string                //市
  custAddressRegion:string              //区
  custPost:string                       //邮编
  custNetAddress:string                 //官网
  industryClassBig:string               
  industryClassBigLabel:string          //一级行业
  custType:number                       //客户类型（1是企业、2是个人）
  custRegisterNum:string                //企业经营执照号
  custBusRank:string                    //经营范围
  registerAddress:string                //注册地址
  custMail:string                       //企业邮箱
  custNature:string                     //企业性质
  custLegalReparesentative:string       //公司法人
  linkManVoList:array                   //联系人信息
  custRegisterPeopleNumberMax:string    //企业规模最大值
  custRegisterPeopleNumberMin:string    //企业规模最小值
  custRegisterMoneyTypeLabel:string     //注册资金
  custOperStatus:string                 
  custOperStatusLabel:string            //经营状态
  custBusTermMin:string                 //经营期限最小值
  custBusTermMax:string                 //经营期限最大值
  homepageHint:string                   //有无官网（0无，1有）
  mainProducts:string                   //主营产品
  brandLabel:string                     //品牌
  businessChannels:string               
  businessChannelsLabel:string          //生意渠道
  marketType:string                     
  marketTypeLabel:string                //市场
  competeCompany:string                 //竞品公司
  competeWebUrl:string                  //竞品网址
  consultProductsLabel:string           //咨询产品
  custrequirement:string                //客户需求
  remark:string                         //备注
  appointmentTime:string                //客户预约时间
  custCreatTime:string                  //企业成立日期
  custCreatTimeStr:string               //企业成立日期中文
}

export interface Data {
  balance:Balance      //账户余额信息
  customer:Customer    //客户信息
}

export interface ResBody {
  status:number    //成功返回状态码101
  msg:string       //返回信息描述
  data:Data        //结果集
}

export interface RequestParams {
  custId:string    //客户ID
}

export interface ReqBody {
  empId:string                   //登录人ID
  requestParams:RequestParams    //请求参数
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/customer/getCustomerDetailById',
        method:'POST',
        data:params
    })
}