import { createStore } from 'vuex'

export default createStore({
  state: {
    globalSearchResults: [],
    loading: false,
    youtubeApiKey: 'AIzaSyDo3mt63gWu22E_Hysm6bGUKIZ7JfKhxqw',
    searchKeyword: null,
  },
  getters: {
    globalSearchResults: state => {
      return state.globalSearchResults
    },
    loading: state => {
      return state.loading
    },
    youtubeApiKey: state => {
      return state.youtubeApiKey
    },
    searchKeyword: state => {
      return state.searchKeyword
    },
  },
  mutations: {
    changeSearchResults (state, globalSearchResults) {
      state.globalSearchResults = globalSearchResults
    },
    changeLoadingStatus (state, loading) {
      state.loading = loading
    },
    changeSearchKeyword (state, keyword) {
      state.searchKeyword = keyword
    },
  },
  actions: {
  },
  modules: {
  }
})
