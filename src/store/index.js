import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    openNav: false,
    animationStage2: false
  }),
  actions: {
    toggleNav() {
      this.openNav = !this.openNav
    },
    closeNav() {
      if (this.openNav) {
        this.openNav = false
      }
    },
    setAnimationStage2(param) {
      this.animationStage2 = param
    }
  }
})
