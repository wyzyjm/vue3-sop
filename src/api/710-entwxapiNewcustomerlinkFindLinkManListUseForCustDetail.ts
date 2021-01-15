
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/710
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：客户详情页-未成交-联系人-（商）-王志军
 */
export interface List {
  linkManId:string         //联系人id
  manNameCn:string         //联系人名称
  manIsActive:string       //联系人是否有效
  defaultFlag:string       //是否默认联系人
  lableFromStr:string      //来源
  manPost:string           //职位
  addr:string              //联系人地址
  telSet:string            //电话集合，多个逗号分隔
  emailSet:string          //邮箱集合，多个逗号分隔
  wxSet:string             //微信集合，多个逗号分隔
  qqSet:string             //qq集合，多个逗号分隔
  landlineSet:string       //座机集合，多个逗号分隔
  dataUpdateTime:string    //数据更新日期
  remarks:string           //备注
}

export interface Data {
  list:List    
}

export interface ResBody {
  status:number    //101是成功，其他都是失败
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  exception:string        
  requestParams:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/newcustomerlink/findLinkManListUseForCustDetail',
        method:'GET',
        params:params
    })
}