
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/698
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：未成交客户详情全景信息-风险信息(工商异常名录)-潘昭
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       //页面条数
  list:array            //返回数据对象的集合
  currentPage:number    //当前页
}

export interface ResBody {
  status:number    //成功返回状态码101
  msg:string       //返回信息描述
  data:Data        //结果集
}

export interface RequestParams {
  currentPage:number    //当前页
  pageSize:number       //页面条数
  custId:?string        //客户ID
  entId:?string         //企业ID
}

export interface ReqBody {
  empId:string                   //登录人id
  requestParams:RequestParams    //请求参数
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/newcustomerdetail/getAbnormalEnterpriseListPage',
        method:'POST',
        data:params
    })
}