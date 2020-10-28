<template>
  <router-link to="/" class="logo-icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.84 45.86">
      <title>Seven Paw Studios Icon</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <polygon class="cls-1" points="29.91 0 30.09 15.13 34.04 15.15 34.04 10.35 54.67 10.35 54.67 17.54 54.28 17.54 0 17.49 0 32.09 21.96 32.09 21.98 40.22 26.13 45.29 26.13 27.91 4.17 27.91 4.17 21.66 4.57 21.66 58.84 21.71 58.84 6.18 34.44 6.18 29.91 0"/>
            <polygon class="cls-1" points="34.04 40.25 34.04 24.03 30.19 24.03 30.42 45.86 34.04 40.25"/>
          </g>
        </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
export default {
  name: 'Logo Icon'
}
</script>

<style lang="scss" scoped>

.logo-icon-container {
  position: fixed;
  // cursor: pointer;
  top: 45px;
  left: 45px;
  display: flex;
  align-items: center;
  width: 50px;
  z-index: 1000;

  svg {
    width: 100%;
  }

  .cls-1 {
    fill: #f0a500;
  }
}

</style>