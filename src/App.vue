<template>
  <main id="app">
    <LogoIcon />
    <router-view/>
    <!-- <Footer /> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
// import Footer from '@footer'
// import 'bootstrap-4-grid'
import './assets/fonts'
import LogoIcon from '@components/Logo-Icon'

export default {
  name: 'App',
  components: {
    // Footer,
    LogoIcon
  },
  computed: {
    ...mapState(['toggleNav'])
  },
}
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
