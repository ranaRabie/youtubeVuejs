import { createStore } from 'vuex'

export default createStore({
  state: {
    globalSearchResults: [],
    loading: false,
    youtubeApiKey: 'AIzaSyDbMvkVBAnAHC3TnJtMH9-1b8XBG9qyHbE'
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
  },
  mutations: {
    changeSearchResults (state, globalSearchResults) {
      state.globalSearchResults = globalSearchResults
    },
    changeLoadingStatus (state, loading) {
      state.loading = loading
    },
  },
  actions: {
  },
  modules: {
  }
})
