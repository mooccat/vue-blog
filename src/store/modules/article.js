import api from '../../api/index'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  articleList:[],
  article:{}
}

// getters
const getters = {
    articleList: state => state.articleList,
    article: state => state.article,
}

// actions
const actions = {
  async getArticleList ({ commit, state },params) {
    let res = await api.getArticles(params)
    let articleList = res.data.data
    commit(types.GET_ARTICLE_LIST,{articleList})
  },
  async getArticle ({ commit, state },params) {
    let res = await api.getArticles(params)
    let article = res.data.data[0]?res.data.data[0]:{}
    commit(types.GET_ARTICLE,{article})
  }
}

// mutations
const mutations = {
  [types.GET_ARTICLE_LIST] (state,{articleList}) {
    state.articleList = articleList
  },
  [types.GET_ARTICLE] (state,{article}) {
    state.article = article
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}