
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1018
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：纸质合同-合同申领-初始化-肖瑞海
 */
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

export interface ReqQuery {
  empId:string    //员工ID
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/offline/contract/contractReqest/reqestInit',
        method:'GET',
        params:params
    })
}