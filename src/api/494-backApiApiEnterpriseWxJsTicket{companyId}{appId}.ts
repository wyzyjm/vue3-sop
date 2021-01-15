
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/494
 * 生成日期：Fri Jan 15 2021 10:59:05 GMT+0800 (China Standard Time)
 * 生成工具版本：node-v0.1
 * 接口名称：获取JSAPiTicket-营销平台后台使用-付兵浩
 */


export interface Data {
  result:string    //结果
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //返回结果对象
}

export interface EmployeeVO {
  id:string              
  account:string         
  password:string        
  oriPassword:string     
  name:string            
  orgId:string           
  jobGrade:string        
  workMail:string        
  officePhone:string     
  mobile:string          
  bindMobile:string      
  state:number           
  sex:number             
  enterDate:number       
  dismissDate:null       
  position:string        
  source:string          
  sort:null              
  regularFlag:number     
  hrUpdateDate:number    
  updateDate:number      
  subName:null           
  subId:null             
}

export interface Data {
  employeeVO:EmployeeVO    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //消息描述
}

export interface ResBody {
}

export interface ResBody {
  status:number    //101
  code:string      //SYS0000
  msg:string       
  data:string      //ticket值
}



export interface ReqParams {
  companyId:string    //企业ID
  appId:string        //AgentId
}



interface Params extends ReqParams {}

import request from '../src/plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/backApi/api-enterprise-wx/js-ticket/{companyId}/{appId}',
        method:'GET',
        params:params
    })
}