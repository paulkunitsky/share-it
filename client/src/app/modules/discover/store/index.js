

export default {
  state: {
    cachedPages: [],
    perPage: 9,
    currentPage: 1,
    totalPosts: null,
    requestsLeft: null
  },

  mutations: {
    totalPosts: (state, payload) => state.totalPosts = payload,
    requestsLeft: (state, payload) => state.requestsLeft = payload,
    currentPage: (state, payload) => state.currentPage = payload,
    perPage: (state, payload) => state.perPage = payload,
    cachedPages: (state, payload) => state.cachedPages = payload,
  }
}
