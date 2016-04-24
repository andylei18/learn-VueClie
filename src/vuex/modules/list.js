import {
  SUCCESS_GET_LISTS,
  FAILURE_GET_LISTS
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [FAILURE_GET_LISTS](state){
    state.items = []
  },
  [SUCCESS_GET_LISTS](state,action){
   // console.log(state)
    //console.log(action)
    state.items = action.lists.data.data
  }
}

export default {
  state,
  mutations
}
