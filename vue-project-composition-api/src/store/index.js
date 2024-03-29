import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
    // increment () {
    //   this.state.count++
    // }
  },
  getters: {
    calledEvenTimes (state) {
      return state.count % 2 === 0
    }
  },
  actions: {
    incrementInActions ({ commit }) {
      console.log('\'increment\' will be called by actions.')
      commit('increment')
    }
  }
})
