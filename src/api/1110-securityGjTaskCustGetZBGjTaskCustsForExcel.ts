
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1110
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：导出任务明细-总部任务-潘昭
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       //每页大小
  list:array            //返回数据对象集合
  currentPage:number    //当前页码
  totalPages:number     //总页数
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  currentPage:?string       //当前页码
  pageSize:?string          //每页大小
  createTimeStart:string    //创建时间筛选区间的开始
  createTimeEnd:string      //创建时间筛选区间的结束
  areaId:?string            //区域ID
  subId:?string             //分公司ID
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/gj/taskCust/getZBGjTaskCustsForExcel',
        method:'GET',
        params:params
    })
}