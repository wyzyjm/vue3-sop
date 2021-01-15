
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/528
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：产品吐槽-回复的列表-潘昭
 */
export interface Data {
  currentPage:string    //当前页码
  pageSize:string       //每页大小
  totalCount:string     //总条数
  totalPages:string     //总页数
  list:array            //数据集合
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //结果集
}

export interface RequestParams {
  currentPage:number       //当前页码
  pageSize:number          //每页大小
  productTucaoId:string    //产品吐槽内容的ID
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/productTucao/getProductTucaoReplyList',
        method:'POST',
        data:params
    })
}