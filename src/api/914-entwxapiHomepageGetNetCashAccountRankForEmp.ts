
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/914
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩排行-详情-个人排名-潘昭
 */
export interface Data {
  dateType:string        //日期类型的值
  dateTypeName:string    //日期类型的名称
  subName:string         //筛选时的分公司名称
  subId:string           //筛选时的分公司ID
  deptId:string          //筛选时的部门ID
  deptName:string        //筛选时的部门名称
  empRankList:array      //排名数据集合
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录员工的ID
  requestParams:string    //dateType：日期类型（1今日，2昨日，3本月，4上月），接口返回筛选项；
type：排行榜类型（全国："country"，区域："area"，分司："sub"，部门："dept"）；
currentPage：当前页（非必传）；
pageSize：每页大小（非必传）；
areaId：区域ID（非必传）；
subId：分公司ID（非必传）；
deptId：部门ID（非必传）。
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getNetCashAccountRankForEmp',
        method:'GET',
        params:params
    })
}