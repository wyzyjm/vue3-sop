
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/706
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：通用的文件上传
 */
export interface FtpFileVo {
  id:string          
  fileName:string    
  fileUrl:string     
}

export interface Data {
  ftpFileVo:FtpFileVo    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //allowFileSizeStr说明：允许的文件大小，单位是M，不传默认10M

filterFileExtNames说明：支持的文件扩展名，不传默认是图片格式

businessType说明：业务类型，用于区分图片存放哪种类型目录下
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/upload',
        method:'GET',
        params:params
    })
}