import api from '../../api/index'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  tagList:[]
}

// getters
const getters = {
    tagList: state => state.tagList
}

// actions
const actions = {
  async getTagList ({ commit, state }) {
    let res = await api.getTags()
    let tagList = res.data.data
    commit(types.GET_TAG_LIST,{tagList})
  }
}

// mutations
const mutations = {
  [types.GET_TAG_LIST] (state,{tagList}) {
    state.tagList = tagList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}