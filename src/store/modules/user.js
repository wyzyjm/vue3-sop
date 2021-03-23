
const state = {
    birthday: null,
    createBy: null,
    createTime: null,
    dismissDate: null,
    employeeId: null,
    employeeName: null,
    enterDate: null,
    hrUpdateTime: null,
    id: null,
    isPass: null,
    isSuper: null,
    jobId: null,
    jobName:null,
    mobile: null,
    officePhone: null,
    orgFullName: null,
    orgId:null,
    orgName:null,
    passDate: null,
    position: null,
    roles: null,
    sex: null,
    sourceId: 0,
    sourceType: 1,
    state: null,
    updateBy: null,
    updateTime: null,
    workMail: null
}

const mutations = {
  setUserInfo(state, _params) {
      console.log(state,_params);
    Object.keys(state).forEach(v=>{
        state[v]=_params[v];
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
