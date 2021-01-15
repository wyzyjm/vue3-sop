
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/674
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：未成交客户详情全景信息-基本信息-潘昭
 */
export interface NewCustomerBaseInfoVo {
  entId:string             //企业ID
  entName:string           //客户名称，企业名称
  estimateDate:string      //成立日期
  cnei:string              //一级行业
  cneiSec:string           //二级行业
  legalRepresent:string    //法人
  regCaps:string           //注册资本
  regCapsUnit:string       //注册资本单位
  mailingAddr:string       //通信地址
  province:string          //省
  city:string              //市
  county:string            //区/县
  regStatus:string         //经营状态
  paidinCaps:string        //实收资本
  paidinCapsUnit:string    //实收资本状态
  operFrom:string          //营业期限自
  operTo:string            //营业期限至
  approvalDate:string      //核准日期
  icrNo:string             //工商注册号
  uscc:string              //统一信用代码
  orgCode:string           //组织机构代码
  entMailbox:string        //邮箱
  employeeNum:string       //员工人数
  insuredNum:string        //参保人数
  entNameEn:string         //英文名称
  operScope:string         //企业经营范围
  homepage:string          //官网
  sourceId:string          //企业数据来源
  speechcraft:string       //话术说明
  dataUpdateTime:string    //数据更新日期
}

export interface Data {
  newCustomerBaseInfoVo:NewCustomerBaseInfoVo    //返回结果的对象
}

export interface ResBody {
  status:number    //成功返回101
  msg:string       //返回消息描述
  data:Data        //结果集
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //列表中custId有就传，没有就传entId
  exception:?string       
}

export interface RequestParams {
  custId:?string    //客户ID
  entId:?string     //企业ID
}

export interface ReqBody {
  empId:string                   //登录人id
  requestParams:RequestParams    //请求参数
}

interface Params extends ReqQuery,ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/newcustomerdetail/getNewCustomerBaseInfoDetail',
        method:'GET',
        params:params
    })
}