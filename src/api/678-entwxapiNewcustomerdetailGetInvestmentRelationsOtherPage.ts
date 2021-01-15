
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/678
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：未成交客户详情全景信息-投资关系对外投资-潘昭
 */
export interface ResBody {
}

export interface RequestParams {
  currentPage:number    //当前页
  pageSize:number       //页面条数
  custId:string         //客户id
  entId:string          //企业ID
}

export interface ReqBody {
  empId:string                   //登录人id
  requestParams:RequestParams    //请求参数
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/newcustomerdetail/getInvestmentRelationsOtherPage',
        method:'POST',
        data:params
    })
}