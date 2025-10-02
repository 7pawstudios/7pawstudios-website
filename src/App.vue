<template>
  <main id="app">
    <LogoIcon />
    <router-view />
    <!-- <Footer /> -->
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store'
import LogoIcon from '@components/Logo-Icon.vue'

const store = useMainStore()
const { openNav } = storeToRefs(store)
</script>

<style lang="scss">
  body {
    margin: 0;

    * {
      box-sizing: border-box;
    }

    .title, .subtitle {
      font-family: 'Bahnschrift';
    }

    // @note fix negative margin
    .row {
      margin: 0;
    }

    p span {
      &.bold {
        font-weight: bolder;
        font-style: italic;
      }
    }

  }

#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // border: 1px solid red;
  box-sizing: border-box;
  height: 100vh;
  background: #1a1c20;
}

</style>
