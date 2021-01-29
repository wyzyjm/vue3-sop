import { timestamp, uid, event, params } from './config'
export function common(state, _params) {

  let _uid = 0
  if (_params && _params._uid) {
    _uid = _params._uid
    delete _params._uid
  }
  state[timestamp] = +new Date()
  state[uid] = _uid
  state[params] = _params
}


const state = {
  [timestamp]: +new Date(),
  [uid]: 0,
  [event]: 'update',
  [params]: undefined
}

const mutations = {
  update(state, _params) {
    common(state, _params)
    state[event] = 'update'
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
