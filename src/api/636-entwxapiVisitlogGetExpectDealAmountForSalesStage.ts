
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/636
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-销售阶段-潘昭
 */
export interface Data {
  laokeList:array    //老客的数据集合
  xinkeList:array    //新客的数据集合
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //结果集
}

export interface RequestParams {
  startDate:string    //商务月开始时间(2019-12-01 00:00:00)
  endDate:string      //商务月结束时间(2019-12-01 00:00:00)
  salerId:?string     //商务ID
}

export interface ReqBody {
  empId:string                   //员工ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/visitlog/getExpectDealAmountForSalesStage',
        method:'POST',
        data:params
    })
}