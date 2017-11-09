import * as types from './mutation-types'

const mutations = {
  [types.SET_DATA](state, data){
    state.data = data
  },

  [types.INCREMENT](state){
    state.count++
  },
  [types. DECREMENT](state){
    state.count--
  }
};

export default mutations
