<template>
  <section class="not-found">
    <h1 class="title">404</h1>
    <p class="subtitle">We tracked seven paws but the trail went cold.</p>

    <ul class="paws-grid" aria-label="Seven animal silhouettes">
      <li class="paw-card rabbit">
        <InlineSvg class="animal-icon" :src="rabbitSvg" alt="Rabbit silhouette" />
        <span class="label">Rabbit</span>
      </li>
      <li class="paw-card lynx">
        <InlineSvg class="animal-icon" :src="lynxSvg" alt="Lynx silhouette" />
        <span class="label">Lynx</span>
      </li>
      <li class="paw-card fox">
        <InlineSvg class="animal-icon" :src="foxSvg" alt="Fox silhouette" />
        <span class="label">Fox</span>
      </li>
      <li class="paw-card bear">
        <InlineSvg class="animal-icon" :src="bearSvg" alt="Bear silhouette" />
        <span class="label">Bear</span>
      </li>
      <li class="paw-card cat">
        <InlineSvg class="animal-icon" :src="catSvg" alt="Cat silhouette" />
        <span class="label">Cat</span>
      </li>
      <li class="paw-card raccoon">
        <InlineSvg class="animal-icon" :src="raccoonSvg" alt="Raccoon silhouette" />
        <span class="label">Raccoon</span>
      </li>
      <li class="paw-card tiger">
        <InlineSvg class="animal-icon" :src="tigerSvg" alt="Tiger silhouette" />
        <span class="label">Tiger</span>
      </li>
    </ul>

    <div class="bottom-row">
      <span class="not-found-text">Not Found</span>
      <router-link to="/" class="home-link">Return to safety</router-link>
    </div>
  </section>
</template>

<script setup>
// Static imports so Vite bundles the SVGs correctly
import rabbitSvg from '@/assets/svg/animals/rabbit-part-2-svgrepo-com.svg'
import lynxSvg from '@/assets/svg/animals/lynx-svgrepo-com.svg'
import foxSvg from '@/assets/svg/animals/fox-wild-animal-fur-vixen-svgrepo-com.svg'
import bearSvg from '@/assets/svg/animals/bear-black-shape-svgrepo-com.svg'
import catSvg from '@/assets/svg/animals/cat-5-svgrepo-com.svg'
import raccoonSvg from '@/assets/svg/animals/racoon-svgrepo-com.svg'
import tigerSvg from '@/assets/svg/animals/tiger-feline-panther-leopard-svgrepo-com.svg'

// Lightweight inline-svg component so we can style stroke/fill from CSS
import { h, onMounted, ref } from 'vue'

const InlineSvg = {
  name: 'InlineSvg',
  props: { src: { type: String, required: true }, alt: { type: String, default: '' } },
  setup(props) {
    const svgHtml = ref('')
    onMounted(async () => {
      const res = await fetch(props.src)
      const text = await res.text()
      svgHtml.value = text
    })
    return () => h('span', { class: 'inline-svg', innerHTML: svgHtml.value, role: 'img', 'aria-label': props.alt })
  }
}
</script>

<style lang="scss" scoped>
  .not-found {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    text-align: center;
    color: $primary;
    font-family: 'Orbitron', sans-serif;
  }

  .title {
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 8px;
    font-size: clamp(48px, 9vw, 120px);
  }

  .subtitle {
    margin: 0 0 24px;
    color: rgba(255,255,255,0.8);
    font-family: 'Orbitron', sans-serif !important;
  }

  .paws-grid {
    list-style: none;
    padding: 0;
    margin: 0 0 28px;
    display: grid;
    grid-template-columns: repeat(7, minmax(72px, 1fr));
    gap: 14px;

    @media (max-width: 960px) {
      grid-template-columns: repeat(4, minmax(72px, 1fr));
    }
    @media (max-width: 560px) {
      grid-template-columns: repeat(3, minmax(72px, 1fr));
    }
  }

  .paw-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .animal-icon,
  .inline-svg {
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));
    display: inline-block;
  }

  // Force SVG strokes to the logo yellow and transparent fill by default
  .inline-svg :deep(svg) {
    width: 100%;
    height: 100%;
    stroke: #f0a500; // from logo .cls-1
    fill: transparent;
    stroke-width: 2.2;
    vector-effect: non-scaling-stroke;
  }

  // Ensure no internal fills from the source SVGs override the style
  .inline-svg :deep(svg *) {
    fill: none !important;
  }

  .label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.9;
  }

  // Species color accents
  // optional color tints via filter to brand the silhouettes subtly
  .rabbit .inline-svg :deep(svg) { stroke: #f0a500; }
  .lynx .inline-svg :deep(svg) { stroke: #f0a500; }
  .fox .inline-svg :deep(svg) { stroke: #f0a500; }
  .bear .inline-svg :deep(svg) { stroke: #f0a500; }
  .cat .inline-svg :deep(svg) { stroke: #f0a500; }
  .raccoon .inline-svg :deep(svg) { stroke: #f0a500; }
  .tiger .inline-svg :deep(svg) { stroke: #f0a500; }

  .home-link {
    color: $secondary;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px dashed rgba($secondary, 0.6);
    padding-bottom: 2px;
  }

  .bottom-row {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .not-found-text {
    font-size: clamp(16px, 2.4vw, 28px);
    text-transform: uppercase;
    letter-spacing: 3px;
    opacity: 0.9;
  }
</style>
