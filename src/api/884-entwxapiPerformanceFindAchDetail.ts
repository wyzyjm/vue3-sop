
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/884
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩看板-净现金到账-明细-潘昭
 */
export interface Data {
  totalCount:number      //总条数
  pageSize:number        //每页大小
  list:array             //返回结果对象的集合
  currentPage:number     //当前页
  totalAccount:string    //总到账金额
}

export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //返回信息
  data:Data        //结果
}

export interface ReqQuery {
  empId:string            //员工ID
  requestParams:string    //currentPage：当前页；
pageSize：每页大小；
businessMonth：商务月，格式yyyy-MM。

}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/performance/findAchDetail',
        method:'GET',
        params:params
    })
}