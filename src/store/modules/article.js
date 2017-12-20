import api from '../../api/index'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  articleList:[]
}

// getters
const getters = {
    articleList: state => state.articleList
}

// actions
const actions = {
  async getArticleList ({ commit, state }) {
    let res = await api.getArticles()
    let articleList = res.data.data
    commit(types.GET_ARTICLE_LIST,{articleList})
  }
}

// mutations
const mutations = {
  [types.GET_ARTICLE_LIST] (state,{articleList}) {
    state.articleList = articleList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}