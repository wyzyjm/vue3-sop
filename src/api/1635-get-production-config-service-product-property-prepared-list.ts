
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1635
 * 生成日期：Wed Mar 03 2021 16:54:45 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：预制属性列表
 * 创建人：杨一点
 */
export interface 归属产品线 {
  全网响应式品牌官网:any[]            
  短视频制作剪辑:any[]              
  微商城:any[]                  
  按次代维:any[]                 
  资质审批:any[]                 
  全网门户:any[]                 
  视频拍摄:any[]                 
  笑推推:any[]                  
  标准官网:any[]                 
  有翼微商城:any[]                
  全网商城-移动商城:any[]            
  公众号管理:any[]                
  外贸门户:any[]                 
  运营服务:any[]                 
  图片拍摄服务:any[]               
  全网商城:any[]                 
  外贸查:any[]                  
  VR视觉拍摄:any[]               
  商标服务:any[]                 
  品牌策划:any[]                 
  全网响应式门户（家装行业版）:any[]       
  OMO:any[]                  
  新门户-外贸门户:any[]             
  全定制响应式-企业高端建站:any[]        
  云市场海外DID:any[]             
  认证周边:any[]                 
  IPV6网站验证:any[]             
  新媒体代运营:any[]               
  安全升级包:any[]                
  纯电商:any[]                  
  汇推:any[]                   
  速成建站:any[]                 
  全网响应式门户（教育培训行业版）:any[]     
  新闻套餐:any[]                 
  全定制响应式-教育培训行业高端建站:any[]    
  消耗型按此代维:any[]              
  视频制作:any[]                 
  智能名片:any[]                 
  电商运营:any[]                 
  百度V信誉:any[]                
  大把推移动版:any[]               
  订货宝:any[]                  
  公司注销:any[]                 
  新门户:any[]                  
  视频电商助手:any[]               
  营销培训课:any[]                
  设计单品:any[]                 
  全定制响应式-机械五金行业高端建站:any[]    
  全定制响应式-海外高端建站:any[]        
  SSL证书:any[]                
  邮件营销:any[]                 
  官网SEO:any[]                
  营销宝:any[]                  
  高级官网:any[]                 
  网页回呼:any[]                 
  商标认证:any[]                 
  正版图片:any[]                 
  卡片设计:any[]                 
  达人投放:any[]                 
  OMO增值服务:any[]              
  标志设计:any[]                 
  实地认证:any[]                 
  代理记账:any[]                 
  在线商城:any[]                 
  响应式门户:any[]                
  移动商城:any[]                 
  移动门户:any[]                 
  税收筹划:any[]                 
  外贸DID:any[]                
  等保服务:any[]                 
  翻译服务:any[]                 
  VI设计:any[]                 
  商标注册:any[]                 
  门户云（PC外贸门户）:any[]          
  电商定制设计:any[]               
  全定制响应式-家装行业高端建站:any[]      
  百度百科:any[]                 
  PC门户:any[]                 
  商学院课程:any[]                
  门户云（PC门户）:any[]            
  商标案件:any[]                 
  云视频会议:any[]                
  网站移动化适配:any[]              
  企业名片:any[]                 
  广告设计:any[]                 
  包装设计:any[]                 
  新网短信:any[]                 
  资质变更:any[]                 
  全网响应式门户（机械行业版）:any[]       
  版权申请:any[]                 
  专利申请:any[]                 
  门户云（外贸）:any[]              
  媒介投放:any[]                 
  中企智营:any[]                 
  营销软文:any[]                 
  门户电商:any[]                 
  透明装修:any[]                 
  全网响应式门户:any[]              
  订货通:any[]                  
  诚企专区:any[]                 
  全球门户:any[]                 
  PC外贸门户:any[]               
  官网SEO外贸:any[]              
  全球邮-专业版:any[]              
  门户云（集团）:any[]              
}

export interface Data {
  语言:any[]        
  归属产品线:归属产品线     
  制作方式:any[]      
  风格:any[]        
  关联账号类型:any[]    
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product/property/prepared/list',
        method:'GET',
        params:params
    })
}