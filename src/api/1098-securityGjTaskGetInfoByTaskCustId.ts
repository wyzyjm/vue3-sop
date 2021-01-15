
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1098
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：管家处理任务页面中的信息-潘昭
 */
export interface Vo {
  id:string                //每条详细任务的id
  taskId:string            //任务id
  serviceInfoId:string     //服务记录id
  custId:string            //客户id
  areaId:string            
  subcompanyId:string      
  gjDeptId:string          
  gjId:string              
  status:number            
  statusStr:string         
  taskType:string          
  taskTypeName:string      
  createTime:number        
  createTimeStr:string     
  createUser:string        
  updateTime:string        
  updateUser:string        
  taskName:string          //任务名称
  startDate:string         
  startDateStr:string      
  endDate:string           
  endDateStr:string        
  custName:string          //客户名称
  gjname:string            
  subcompanyName:string    
  remark:string            //任务备注
  memberCode:string        //会员号
  custTel:string           //注册手机
  custMail:string          //注册邮箱
}

export interface Data {
  vo:Vo    //返回结果对象
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        // 返回结果集
}

export interface ReqQuery {
  taskCustId:string    //任务明细的id
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/gj/task/getInfoByTaskCustId',
        method:'GET',
        params:params
    })
}