import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openNav: false,
    animationStage2: false
  },
  mutations: {
    toggleNav(state) {
      state.openNav = !state.openNav
    },
    closeNav(state) {
      if(state.openNav) {
        state.openNav = false
      }
    },
    setAnimationStage2(state, param) {
      state.animationStage2 = param
    }
  },
  actions: {
  },
  modules: {
  }
})
