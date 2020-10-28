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
  import Logo from '@components/Logo'

  export default {
    name: 'Maintenance',
    components: {
      Logo,
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
    margin-top: 13px;
    letter-spacing: 18px;
  }

  .launch-date {
    color: #f0a500;
    font-family: 'Orbitron';
    position: absolute;
    bottom: 35px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>
