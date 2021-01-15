
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/526
 * 生成日期：Fri Jan 15 2021 10:26:21 GMT+0800 (China Standard Time)
 * 生成工具版本：node-v0.1
 * 接口名称：产品吐槽-列表-潘昭
 */


export interface Data {
  currentPage: number    //当前页码
  pageSize: number       //每页大小
  totalCount: number     //总条数
  totalPages: number     //总页数
  list: array            //数据集合
}

export interface ResBody {
  status: number    //口请求成功返回101
  msg: string       //消息描述
  data: Data        //结果集
}

export interface ReqQuery {
  empId: string    //登录员工的ID
}



export interface RequestParams {
  currentPage: number        //当前页码
  pageSize: number           //每页数据条数
  productCategory: string    //产品类别
  status: number             //状态
  createTimeStart: string    // 吐槽时间开始（2020-07-28）
  createTimeEnd: string      // 吐槽时间结束（2020-07-29）
}

export interface ReqBody {
  empId: string                   //登录员工的ID
  requestParams: RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqQuery, ReqBody { }

import request from '../src/plugins/request'
export default (params: Params) => {
  return request({
    url: '/entwxapi/productTucao/getProductTucaoList',
    method: 'POST',
    data: params
  })
}