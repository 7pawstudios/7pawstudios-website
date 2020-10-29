<template>
  <div class="maintenance-body">
    <Logo />
    <div class="bottom-text">
      <span>S</span>
      <span>T</span>
      <span>U</span>
      <span>D</span>
      <span>I</span>
      <span>O</span>
      <span>S</span>
    </div>
    <div class="launch-date">
      <span>
        Launch Date:
      </span>
      <span>
        20.11.2020
      </span>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs'
  import { mapState, mapMutations } from 'vuex'
  import Logo from '@components/Logo'

  export default {
    name: 'Maintenance',
    components: {
      Logo,
    },
    data() {
      return {
        order: [4,1,6,2,5,0,3],
        animationDuration: 800
      }
    },
    computed: {
      ...mapState(['animationStage2'])
    },
    methods: {
      // ...mapMutations(['setAnimationStage2'])
      startBlurAnimation() {
        // Blur text
        // var animation = anime.timeline({
        anime({
          targets: '.bottom-text span',
          filter: ['blur(5px)', 'blur(0px)'],
          easing: 'easeInOutBounce',
          // duration: this.animationDuration,
          delay: (el, i) => {
            return this.order[i] * 400
          }
        })

        // Animate opacity 
        // .add({
        anime({
          targets: '.bottom-text span',
          opacity: [0, 1],
          easing: 'easeInOutSine',
          // duration: this.animationDuration,
          delay: (el, i) => {
            // console.log(anime.random(0,6))
            return this.order[i] * 350
          }
        })
      }
    },
    mounted() {
      // setTimeout(() => {
        // animation.finished.then(() => {
        //   this.setAnimationStage2(true)
        //   // console.log('Done')
        // })
      // }, 3500)
    },
    watch: {
      animationStage2(newValue, oldValue) {
        setTimeout(() => {
          this.startBlurAnimation()
        }, 500)
      }
    },
  }
</script>

<style lang="scss" scoped>

.maintenance-body {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bottom-text {
    font-size: 0.75em;
    font-family: 'Orbitron';
    font-weight: bold;
    margin-top: 10px;
    letter-spacing: 16px;

    span {
      opacity: 0;

      &:nth-child(1) {
        filter: blur(0px);
      }
    }
  }

  .launch-date {
    color: $primary;
    font-family: 'Orbitron';
    position: absolute;
    bottom: 35px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}

</style>
