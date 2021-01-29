import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as state from './state'
import * as mutations from './mutations'
import modules from './modules'


Vue.use(Vuex)

const isDebug = process.env.NODE_ENV==='development'

const options = {
  state,
  mutations,
  modules,
  strict: isDebug,
  plugins: isDebug ? [createLogger()] : []
}

export default new Vuex.Store(options)
