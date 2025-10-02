<template>
  <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.88 85.25" class="">
      <title>Seven Paw Studios Logo</title>
      <!-- Define filters and effects -->
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="200%" height="200%">
          <feDropShadow class="glow-color" dx="0" dy="0" stdDeviation="6"/>
        </filter>
      </defs>
      <g id="logo-inner-container" data-name="Layer 2">
        <g id="seven">
          <polygon class="logo_s cls-1" points="8.9 21.43 45.08 21.43 45.08 12.53 0 12.53 0 42.96 36.54 42.96 36.54 55.16 0.35 55.16 0.35 64.06 45.43 64.06 45.43 34.05 8.9 34.05 8.9 21.43"/>
          <polygon class="logo_e1 cls-1" points="63.45 55.11 63.45 42.96 73.37 42.96 73.37 34.06 63.45 34.06 63.45 33.98 54.55 33.98 54.55 64 109.72 64 102.31 55.11 63.45 55.11"/>
          <g class="heartbeat">
            <polygon class="logo_v cls-2" points="53.38 12.63 53.38 21.48 66.97 21.54 85.33 21.54 121.45 67.36 123.49 64.53 155.99 21.54 189.11 21.54 189.11 12.63 151.49 12.65 121.58 53.12 89.65 12.65 53.38 12.63"/>
          </g>
          <polygon class="logo_e2 cls-1" points="180.21 55.33 141.55 55.33 134.15 64.22 189.12 64.22 189.12 34.06 170.13 34.06 170.13 42.96 180.21 42.96 180.21 55.33"/>
          <polygon class="logo_n cls-1" points="197.43 12.65 197.43 64.25 206.33 64.25 206.33 20.05 255.17 69.68 255.17 0.19 246.28 11.71 246.28 47.95 211.53 12.65 197.43 12.65"/>
        </g>
        <g id="paw">
          <polygon class="logo_p cls-1" points="265.14 0 265.14 76.09 274.04 84.88 274.04 21.53 309.61 21.53 309.61 34.42 287.33 34.42 281.58 43.32 318.51 43.32 318.51 12.64 274.4 12.64 265.14 0"/>
          <polygon class="logo_a cls-1" points="327.44 13.12 327.44 64.41 336.34 64.41 336.34 27.73 367.53 64.58 379.19 64.58 335.63 13.12 327.44 13.12"/>
          <polygon class="logo_w cls-1" points="391.53 26.5 391.53 50.07 359.78 12.53 348.12 12.53 392.24 64.68 400.43 64.68 400.43 39.54 421.69 64.68 429.88 64.68 429.88 12.53 420.98 12.53 420.98 50.07 401.03 26.5 391.53 26.5"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import anime from 'animejs'
import { useMainStore } from '@/store'

const store = useMainStore()
const { animationStage2 } = storeToRefs(store)

onMounted(() => {
  // Animate lines
  const animation = anime.timeline({
    targets: '#logo-inner-container polygon.cls-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: (el, i) => {
      return i * 400
    }
  })

  // Animate fill color
  animation.add({
    targets: '#logo-inner-container polygon.cls-1',
    fill: ['#f4f1ed00', '#f4f1ed'],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: (el, i) => i * 500
  })

  animation.finished.then(() => {
    store.setAnimationStage2(true)
    console.log('Done')
  })
})

watch(animationStage2, (newValue) => {
  if (newValue === true) {
    // Animate letter V
    anime({
      targets: '#logo-inner-container .logo_v',
      keyframes: [
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      ],
      easing: 'easeInOutSine',
      duration: 800
    })
  }
})
</script>

<style lang="scss" scoped>

.logo-container {
  display: flex;
  align-items: center;

  .cls-1 {
    fill: none;
    stroke: $text;
    stroke-width: 1px;
  }

  .cls-2 {
    fill: #f0a500;
  }

  .logo_v {
    opacity: 0;
  }

  svg {
    width: 300px;

    .glow-color {
      flood-color: $primary;
      animation: glow-beat 2.5s infinite;
    }

    @keyframes glow-beat {
      0% {
        flood-opacity: 1;
      }

      50% {
        flood-opacity: 0;
      }

      100% {
        flood-opacity: 1;
      }
    }

    #logo-inner-container {
      #seven {
        .heartbeat {
          filter:url(#glow);
        }
      }
    }
  }
}

</style>
