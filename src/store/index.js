import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openNav: false
  },
  mutations: {
    toggleNav(state) {
      state.openNav = !state.openNav
    },
    closeNav(state) {
      if(state.openNav) {
        state.openNav = false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
