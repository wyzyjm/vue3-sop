import * as types from '../mutation-types'
// postMessage监听
const state = {
  example: {
    // 合法来源 * 表示不限制
    origin: '*',
    // 触发次数,自增
    count: 0
  }
}

const mutations = {
  [types.TRIGGER_POSTMESSAGE_DEVENT] (state, e) {
    const s = state[e.data] || {}
    if (s.origin === '*' || e.origin === s.origin) s.count++
  }
}

export default {
  state,
  mutations
}
