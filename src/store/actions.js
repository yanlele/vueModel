export default {
  increment({commit}) {
    commit('INCREMENT')
  },
  decrement({commit}) {
    commit('DECREMENT')
  },
  addOdd({
           commit, state
         }) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  addEven({commit, state}) {
    if (state.count % 2 === 0) {
      commit('INCREMENT')
    }
  },
  setTimeOut({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
