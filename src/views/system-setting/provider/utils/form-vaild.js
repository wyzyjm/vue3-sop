// 注册资本
export const registeredCapitalVaild = (rule, value, callback) => {
    let nv = Number(value)
    if (isNaN(nv) || nv <= 0 || value.indexOf('.') > -1) {
      callback(new Error('请输入大于0的正整数'));
    }
};
// 手机号
export const contactPhoneVaild = (rule, value, callback) => {
    let reg = /^1[0-9]{10}$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    }
};
// 邮箱
export const contactEmailVaild = (rule, value, callback) => {
    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱'));
    }
};