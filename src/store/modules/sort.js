import api from '../../api/index'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  sortList:[]
}

// getters
const getters = {
    sortList: state => state.sortList
}

// actions
const actions = {
  async getSortList ({ commit, state }) {
    let res = await api.getSorts()
    let sortList = res.data.data
    commit(types.GET_SORT_LIST,{sortList})
  }
}

// mutations
const mutations = {
  [types.GET_SORT_LIST] (state,{sortList}) {
    state.sortList = sortList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}