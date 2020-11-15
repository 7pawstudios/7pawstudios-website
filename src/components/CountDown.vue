<template>
  <div
    class="countdown"
    :class="{ 'glitch': glitchActive }"
    :glitch-text="!switcher ? time  + ' Remaining' : 'Launch Date: 11.12.2020'"
  >
    <!-- <span v-if="glitchTextToggle">
        Launch Date: 20.11.2020
    </span>
    <span v-else>
      {{ time }} To Go
    </span> -->
    <span>
      {{ testText }}
    </span>
  </div>
</template>

<script>
import Countdown from 'countdown'
import Scrambler from 'scrambling-text'

export default {
  name: 'CountDown',
  data() {
    return {
      interval: 100,
      switcher: false,
      time: '',
      glitchActive: false,
      glitchTextToggle: true,
      scrambleText: [
        'Launch Date: 11.12.2020',
        ''
      ],
      testText: 'Launch Date: 11.12.2020'
    }
  },
  computed: {
    // time() {
    //   return countdown( new Date(2021, 0, 1) ).toString()
    // }
  },
  mounted() {

    function delay(cb, ms) {

      // MyPromise constructor - subclass of Promise
      function MyPromise(fn) {
        var promise       = new Promise((resolve, reject) => fn(resolve, reject));
        promise.__proto__ = MyPromise.prototype;
        return promise;
      }

      // MyPromise should extend Promise
      MyPromise.__proto__           = Promise;
      MyPromise.prototype.__proto__ = Promise.prototype;

      // Extend MyPromise to return delay from promise success
      MyPromise.prototype.delay = function (cb, ms) {
        return this.then( () => delay(cb, ms) );
      }
      
      // Create internal 'wait' promise using setTimeout
      let _wait = ms => new MyPromise( resolve => setTimeout(resolve, ms) );

      return _wait(ms).then(cb);
    }

    const $this = this
    const scrambler = new Scrambler()

    Countdown(
      new Date(2020, 12, 11),
      (ts) => {
        this.time = ts;

        // @bug bug fix
        this.time.days = ts.days - 30

        // Push time to text array
        this.scrambleText[1] = (ts) + ' Remaining'

      },
      ~(Countdown.MONTHS | Countdown.WEEKS |Countdown.HOURS |Countdown.MINUTES | Countdown.SECONDS | Countdown.MILLISECONDS)
      )

      // define a handler that is called whenever text is scrambled.
      const handleScramble = (text) => {
        this.testText = text
      }

      setInterval(() => {
        this.switcher = !this.switcher

        delay(() => {
          // console.log('GliTCH')
          $this.glitchActive = true
        }, 7000).delay(() => {
          // console.log('No GliTCH')
          $this.glitchActive = false
        }, 1500)

        // scrambler start
        const textIndex = this.switcher ? this.scrambleText[1] : this.scrambleText[0]
        scrambler.scramble(textIndex, handleScramble)
      }, 8000)
  
  },
}
</script>

<style lang="scss" scoped>
  .countdown {
    color: $primary;
    min-width: 294px;
    // font-family: 'Orbitron';
    font-family: 'Orbitron', sans-serif;
    position: absolute;
    bottom: 35px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;

    &.glitch {

      &::before, &::after {
        content: attr(glitch-text);
        font-size: 99%;
        top: 0;
        color: white;
        position: absolute;
        width: 100%;
        background: $secondary;
        // overflow: hidden;
      }

      &::before {
        left: -2px;
        text-shadow: 3px 0 blue;
        animation: noise-anim-2 15s infinite linear alternate-reverse;
      }

      &::after {
        left: 2px;
        text-shadow: -3px 0 red;
        animation: noise-anim 2s infinite linear alternate-reverse;
      }

    }

    // @todo add heartbeat breathing keyframes to seven paws logo

    @keyframes noise-anim {
      $steps: 20;

      @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
          $top: random(100);
          $bottom: random(101 - $top);
          clip-path: inset(#{$top}% 0 #{$bottom}%  0);
        }
      }
    }

    @keyframes noise-anim-2 {
      $steps: 20;

      @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
          $top: random(100);
          $bottom: random(101 - $top);
          clip-path: inset(#{$top}% 0 #{$bottom}%  0);
        }
      }
    }

  }
</style>