
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/588
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-看板（全角色）-王金峰
 */
export interface PerformanceForecastVo {
  salerId:string                                          //商务id
  salerName:string                                        //商务姓名
  areaId:string                                           //区域id
  areaName:string                                         //区域名称
  subcompanyId:string                                     //分司id
  subcompanyName:string                                   //分司名称
  deptId:string                                           //部门id
  deptName:string                                         //部门名称
  salerMonth:string                                       //商务月
  cashArrivedTotal:number                                 //成交合计
  reserveTotal:number                                     // 储备合计
  baseTask:number                                         //基本任务
  challengeTask:number                                    // 挑战任务
  newCustReserve:number                                   //新客储备
  oldCustReserve:number                                   //老客储备
  reserveGap:number                                       //储备缺口
  reserveToTaskRatio:number                               //储备任务比
  newCustCashArrived:number                               //新客成交
  newCustInForecastCashArrived:number                     //新客预测内成交
  newCustOutForecastCashArrived:number                    //新客预测外成交
  oldCustCashArrived:number                               //老客成交
  oldCustInForecastCashArrived:number                     //老客预测内成交
  oldCustOutForecastCashArrived:number                    //老客预测外成交
  inForecastTotalCashArrived:number                       // 预测内成交合计
  outForecastTotalCashArrived:number                      // 预测外成交合计
  cashArrivedPlusCurrentReserveTotalToTaskRatio:number    //成交及储备与任务比
  baseTaskGap:number                                      //任务缺口
  currentNewCustReserveTotal:number                       // 当前新客储备
  currentOldCustReserveTotal:number                       // 当前老客储备
  currentReserveTotal:number                              //当前储备合计
  jobGradeName:string                                     //职级
  rateProcess:number                                      //进度（-1不显示）
}

export interface Data {
  performanceForecastVo:PerformanceForecastVo    
}

export interface ResBody {
  status:number    //状态码 101为成功
  msg:null         
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //salerMonth：商务月
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/getAchivementForecast',
        method:'GET',
        params:params
    })
}