import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import article from './modules/article'
import sort from './modules/sort'
import tag from './modules/tag'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    article,
    sort,
    tag,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})