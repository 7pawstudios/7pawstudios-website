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
import Logo from '@components/Logo.vue'
import CountDown from '@components/CountDown.vue'
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
    font-size: 1em;
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    margin-top: 20px;
    letter-spacing: 16px;
    color: #f4f1ed;
    display: block;
    visibility: visible;
    z-index: 100;
    position: relative;

    span {
      opacity: 0;
      filter: blur(5px);
      display: inline-block;
      color: #f4f1ed;
    }
  }
}

</style>
