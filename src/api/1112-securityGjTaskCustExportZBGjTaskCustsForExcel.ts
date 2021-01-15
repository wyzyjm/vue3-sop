
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1112
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：导出任务明细（导出excel）-总部任务-潘昭
 */
export interface ResBody {
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
        url:'/security/gj/taskCust/exportZBGjTaskCustsForExcel',
        method:'GET',
        params:params
    })
}