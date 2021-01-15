
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/720
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-预测内明细-潘昭
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       //页面大小
  list:array            //返回数据对象的集合
  currentPage:number    //当前页
}

export interface ResBody {
  status:number    //状态码，成功返回101
  msg:string       //返回信息
  data:Data        //结果集
}

export interface ReqQuery {
  empId:string            //登录人Id
  requestParams:string    //areaId：区域id；
subcompanyId：分司id；
deptId：部门id；
salerId：商务id；
isTurnoverOrNot：成交；
isVisitedOrNot：实时跟进；
visitStage：当前跟进阶段；
currentPage：当前页；
pageSize：页面大小；
  exception:string        
}

export interface RequestParams {
  areaId:?string             //区域id
  subcompanyId:?string       //分司id
  deptId:?string             //部门id
  salerId:?string            //商务id
  isTurnoverOrNot:?number    //成交
  isVisitedOrNot:?number     //实时跟进
  visitStage:?string         //当前跟进阶段
  currentPage:?number        //当前页
  pageSize:?number           //页面大小
}

export interface ReqBody {
  empId:string                   //登录人Id
  requestParams:RequestParams    
}

interface Params extends ReqQuery,ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/getCustInventoryDetailPage',
        method:'GET',
        params:params
    })
}