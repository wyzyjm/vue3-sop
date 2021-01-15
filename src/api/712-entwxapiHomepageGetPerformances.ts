
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/712
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩看板-潘昭
 */
export interface SmaHomePageVoNew {
  depositAmountDay:number                    
  depositAmountDayStr:string                 
  depositAmountMonth:number                  
  depositAmountMonthStr:string               
  empOrderNumDay:number                      
  empOrderNumDayStr:string                   
  empOrderNumMonth:number                    
  empOrderNumMonthStr:string                 
  netCashAccountDay:number                   //今日净现金到账，数值
  netCashAccountDayStr:string                //今日净现金到账，（单位：万）
  netCashAccountMonth:number                 //本月净现金到账，数值
  netCashAccountMonthStr:string              //本月净现金到账，（单位：万）
  relaySaleHiredMoneyDay:number              
  relaySaleHiredMoneyDayStr:string           
  relaySaleHiredMoneyMonth:number            
  relaySaleHiredMoneyMonthStr:string         
  webNetCashAccountDay:number                
  webNetCashAccountDayStr:string             
  webNetCashAccountMonth:number              
  webNetCashAccountMonthStr:string           
  newWebNumDay:number                        
  newWebNumDayStr:string                     
  newWebNumMonth:number                      
  newWebNumMonthStr:string                   
  newCustNumDay:number                       
  newCustNumDayStr:string                    
  newCustNumMonth:number                     
  newCustNumMonthStr:string                  
  oldCustNumDay:number                       
  oldCustNumDayStr:string                    
  oldCustNumMonth:number                     
  oldCustNumMonthStr:string                  
  completePercent:number                     //任务完成比
  completePercentStr:string                  //任务完成比（带有百分号）
  differenceOfPromotion:number               //晋级差额，数值
  differenceOfPromotionStr:string            //晋级差额，（单位：元）
  differenceOfDemotion:number                //保级差额，数值
  differenceOfDemotionStr:string             //保级差额，（单位：元）
  netCashAccountRankDept:number              
  netCashAccountRankDeptListDay:string       
  netCashAccountRankDeptListMonth:string     
  netCashAccountRankSub:number               
  netCashAccountRankSubListDay:string        
  netCashAccountRankSubListMonth:string      
  netCashAccountRankArea:number              
  netCashAccountRankAreaListDay:string       
  netCashAccountRankAreaListMonth:string     
  depositAmountDayRankListDay:string         
  depositAmountDayRankListMonth:string       
  relaySaleHiredMoneyRankListDay:string      
  relaySaleHiredMoneyRankListMonth:string    
}

export interface Data {
  smaHomePageVoNew:SmaHomePageVoNew    //包含返回值的对象
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqBody {
  empId:string            //登录员工的ID
  requestParams:string    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getPerformances',
        method:'POST',
        data:params
    })
}