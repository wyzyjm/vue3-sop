
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1092
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：产品到期客户-管家-潘昭
 */
export interface Status {
}

export interface Data {
  totalCount:number     //总条数
  pageSize:number       //每页大小
  list:array            //数据集合，包含以下对象
  currentPage:number    //当前页码
  totalPages:number     //总页数
}

export interface ResBody {
  status:Status    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  currentPage:?string       //当前页码
  pageSize:?string          //每页大小
  gjId:?string              //管家ID
  gjDeptId:?string          //管家部ID
  subId:?string             //分公司ID
  areaId:?string            //区域ID
  custName:?string          //客户名称
  buyProductId:?string      //已购产品ID，逗号拼接
  expireTimeStart:string    //到期日期，开始日期
  expireTimeEnd:string      //到期日期，结束日期
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/gj/productInstance/getExpireProductsAndBuyProducts',
        method:'GET',
        params:params
    })
}