<template>
  <footer>
    <ul>
      <li>
        <!-- @todo update with actua; links -->
        <a href="https://www.facebook.com/Kreston-Zimbabwe-972396369498967" target="_blank">
          <fa-icon :icon="['fab', 'facebook-f']" class="" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/KrestonZw" target="_blank">
          <fa-icon :icon="['fab', 'twitter']" class="" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/mjv-chartered-accountants1/" target="_blank">
          <fa-icon :icon="['fab', 'linkedin-in']" class="" />
        </a>
      </li>
    </ul>
    <div class="copyright">
      Copyright
      <span>
        &copy;
      </span>
      {{ new Date().getFullYear() }} Kreston Zimbabwe. All rights reserved.
    </div>
    <div class="signature">
      Made by 
      <a href="https://www.uxbuilt.com" target="_blank">
        <span class="yellow">UX</span>
        <span class="aqua">Built</span>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    font-weight: bold;
    width: 100vw;
    height: 90px;
    padding: 10px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(255, 255, 255);
    z-index: 1001;

    ul {
      margin: 5px 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 1.4em;
        margin: 0 14px;
        display: inline-block;

        a {
          color: $primary;
        }
      }
    }

    .copyright {
      color: $primary;
      font-size: 0.8em;
      padding: 0 20px;

      @media (max-width: 414px) {
        
      }

      span {
        // font-size: 1.3em;
      }
    }

    .signature {
      color: rgb(92, 92, 92);
      font-size: 0.7em;
      margin-top: 6px;

      a {
        text-decoration: none;

        .yellow {
          color: #ffc735;
        }
        .aqua {
          color: #40aee0;
        }
      }
    }
  }
</style>