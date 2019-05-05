import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  getCount (state) {
    return state.count + 100
  }
}

const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  }
}

const actions = {
  addAction (context) {
    context.commit('add')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
