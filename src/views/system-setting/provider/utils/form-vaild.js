// 注册资本
export const registeredCapitalVaild = (rule, value, callback) => {
    let nv = Number(value)
    if (isNaN(nv) || nv <= 0 || String(value).indexOf('.') > -1) {
      callback(new Error('请输入大于0的正整数'));
    } else {
        callback()
    }
};
// 手机号
export const contactPhoneVaild = (rule, value, callback) => {
    // let reg = /^1[0-9]{10}$/
    let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    } else {
        callback()
    }
};
// 邮箱
export const contactEmailVaild = (rule, value, callback) => {
    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱'));
    } else {
        callback()
    }
};

// // 公司名称
// import checkProviderName from '@/api/1300-get-frontapi-service-provider-check-name-useful'
// export const basicNameVaild = (rule, value, callback, param) => {
//     if (!value) {
//         callback(new Error('请输入公司全称'))
//         return false 
//     }
//     if (value.length < 2 || value.length > 100) {
//         callback(new Error('长度在 2 到 100 个字符'))
//         return false
//     }
//     console.log(rule, value,callback, param, 999)
//     checkProviderName({
//         name: value,
//         // id: this.$route.params.pid || '',
//     }).then(res => {
//         console.log(res.data)
//         // 已存在服务商名称 不可用
//         if (!res.data) {
//             callback(new Error('公司名称已存在'))
//             return false
//         }
//     }).catch(err => {
//         console.log(err, '检查公司名称是否可用error')
//     })
// };