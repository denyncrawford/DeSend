import { createStore } from 'vuex'

export default createStore({
  state: {
    ipfsNode: null,
    user: null
  },
  mutations: {
    setIpfsNode(state, node) {
      state.ipfsNode = node
    },
    setUser(state, user) {
      state.user = user
    }
  }
})