
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1156
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线上线索-商机列表-综合查询-王志军
 */
export interface Data {
  totalCount:number     
  pageSize:number       
  data:array            
  currentPage:number    
  totalPages:number     
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  currentPage:string               
  pageSize:string                  
  clueCode:string                  //线索单号
  busiOppoCode:string              //商机单号
  custName:string                  //客户名称
  linkmanName:string               //联系人
  mobile:string                    //手机号
  telephone:string                 //座机
  mail:string                      //邮箱
  qq:string                        //qq
  startDateCreate:string           //开始创建时间
  endDateCreate:string             //结束创建时间
  createrName:string               //创建人
  startDateHandle:string           //开始处理时间
  endDateHandle:string             //结束处理时间
  handlePersonName:string          //处理人
  source:string                    //线索类型
  baiduSource:string               //二级线索类型
  handleResult:string              //处理结果
  handleResultChild:string         //二级处理结果
  industryOneCode:string           //一级行业
  industryTwoCode:string           //二级行业
  status:string                    //状态
  promoteSlug:string               //活动
  channelSlug:string               //渠道
  channelChildSlug:string          //二级渠道
  vdevice:string                   //端
  isComplete:string                //是否补全
  opportunityVisitStatus:string    //回访分配
  province:string                  //省
  city:string                      //市
  district:string                  //区
  regionId:string                  //分配区域
  branchOfficeId:string            //分配分司
  commerce:string                  //分配商务
  visitorName:string               //回访人
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/telBusiness/findByComplexPage',
        method:'GET',
        params:params
    })
}