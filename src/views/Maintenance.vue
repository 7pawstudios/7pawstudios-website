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
    <CountDown />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import anime from 'animejs'
import { useMainStore } from '@/store'
import Logo from '@components/Logo.vue'
import CountDown from '@components/CountDown.vue'

const store = useMainStore()
const { animationStage2 } = storeToRefs(store)

const order = [4, 1, 6, 2, 5, 0, 3]
const animationDuration = 800

const startBlurAnimation = () => {
  // Blur text
  anime({
    targets: '.bottom-text span',
    filter: ['blur(5px)', 'blur(0px)'],
    easing: 'easeInOutBounce',
    delay: (el, i) => {
      return order[i] * 400
    }
  })

  // Animate opacity 
  anime({
    targets: '.bottom-text span',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    delay: (el, i) => {
      return order[i] * 350
    }
  })
}

watch(animationStage2, (newValue) => {
  setTimeout(() => {
    startBlurAnimation()
  }, 500)
})
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
    // font-family: 'Orbitron';
    font-family: 'Orbitron', sans-serif;
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
}

</style>
