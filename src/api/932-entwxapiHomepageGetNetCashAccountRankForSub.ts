
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/932
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩排行-详情-分司排名-潘昭
 */
export interface ResBody {
}

export interface ReqQuery {
  empId:string            //登录员工的ID
  requestParams:string    //dateType：日期类型（1今日，2昨日，3本月，4上月），接口返回筛选项；
type：排行榜类型（全国："country"，区域："area"，分司："sub"，部门："dept"）；
areaId：区域ID（非必传）。
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getNetCashAccountRankForSub',
        method:'GET',
        params:params
    })
}