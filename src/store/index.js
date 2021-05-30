import { createStore } from 'vuex'

export default createStore({
  state: {
    globalSearchResults: [],
  },
  getters: {
    globalSearchResults: state => {
      return state.globalSearchResults
    }
  },
  mutations: {
    changeSearchResults (state, globalSearchResults) {
      state.globalSearchResults = globalSearchResults
    }
  },
  actions: {
  },
  modules: {
  }
})
