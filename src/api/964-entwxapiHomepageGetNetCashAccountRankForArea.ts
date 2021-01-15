
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/964
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩排行-详情-区域排名-潘昭
 */
export interface Status {
}

export interface Data {
  dateTypeName:string    
  dateType:string        //日期类型的值
  orgRankList:array      //区域数据集合
}

export interface ResBody {
  status:Status    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  empId:string            //登录员工的ID
  requestParams:string    //dateType：日期类型（1今日，2昨日，3本月，4上月），接口返回筛选项；
type：排行榜类型（全国："country"，区域："area"，分司："sub"，部门："dept"）。
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getNetCashAccountRankForArea',
        method:'GET',
        params:params
    })
}