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
import { onMounted } from 'vue'
import { animate, createTimeline, utils } from 'animejs'

onMounted(() => {
  // Get all polygon elements and setup for stroke animation
  const polygons = document.querySelectorAll('#logo-inner-container polygon.cls-1')

  polygons.forEach(polygon => {
    const length = polygon.getTotalLength()
    polygon.style.strokeDasharray = length
    polygon.style.strokeDashoffset = length
    polygon.style.fill = 'transparent' // Start with no fill
  })

  // Create master timeline for all animations
  const masterTimeline = createTimeline({
    defaults: {
      ease: 'inOutSine',
      duration: 1200
    }
  })

  // Phase 1: Logo stroke drawing
  masterTimeline.add(animate('#logo-inner-container polygon.cls-1', {
    strokeDashoffset: { to: 0 },
    delay: utils.stagger(400)
  }))

  // Phase 2: Logo fill (overlapped with stroke)
  masterTimeline.add(animate('#logo-inner-container polygon.cls-1', {
    fill: { to: '#f4f1ed' },
    delay: utils.stagger(500)
  }), '-=1200') // Overlap with stroke

  // Phase 3: V letter fade in
  masterTimeline.add(animate('#logo-inner-container .logo_v', {
    opacity: { to: 1 },
    duration: 800
  }), '+=200') // Small delay after fill

  // Phase 4: STUDIOS text animation
  masterTimeline.add(animate('.bottom-text span', {
    filter: { to: 'blur(0px)' },
    opacity: { to: 1 },
    ease: 'inOutBounce',
    delay: (el, i) => [4, 1, 6, 2, 5, 0, 3][i] * 400
  }), '+=500') // Delay after V letter

  // Start the master timeline
  masterTimeline.play()
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
