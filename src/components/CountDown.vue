<template>
  <div
    class="countdown"
    :class="{ 'glitch': glitchActive }"
    :glitch-text="!switcher ? time  + ' Remaining' : 'RETURN Date: 01.05.2024'"
  >
    <!-- <span v-if="glitchTextToggle">
        Launch Date: 20.11.2020
    </span>
    <span v-else>
      {{ time }} To Go
    </span> -->
    <span>
      {{ mainText }}
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
        'Launch Date: Loading...',
        ''
      ],
      mainText: 'Launch Date: Loading...',
      config: {
        launchDate: '2026-01-05',
        launchDateDisplay: '05.01.2026',
        daysOffset: 30
      }
    }
  },
  computed: {
    // time() {
    //   return countdown( new Date(2021, 0, 1) ).toString()
    // }
  },
  methods: {
    async loadConfig() {
      try {
        const response = await fetch('/config.json')
        const config = await response.json()
        this.config = config
        
        // Update display text with loaded config
        this.scrambleText[0] = `Launch Date: ${config.launchDateDisplay}`
        this.mainText = `Launch Date: ${config.launchDateDisplay}`
        
        // Parse the launch date and start countdown
        const [year, month, day] = config.launchDate.split('-').map(Number)
        this.startCountdown(new Date(year, month - 1, day), config.daysOffset)
      } catch (error) {
        console.error('Failed to load config:', error)
        // Fallback to default values
        this.startCountdown(new Date(2026, 0, 5), 30)
      }
    },
    
    startCountdown(targetDate, daysOffset) {
      const $this = this
      const scrambler = new Scrambler()

      Countdown(
        targetDate,
        (ts) => {
          this.time = ts;
          // Apply days offset
          this.time.days = ts.days - daysOffset
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

        this.delay(() => {
          $this.glitchActive = true
        }, 7000).delay(() => {
          $this.glitchActive = false
        }, 1500)

        // scrambler start
        const textIndex = this.switcher ? this.scrambleText[1] : this.scrambleText[0]
        scrambler.scramble(textIndex, handleScramble)
      }, 8000)
    },
    
    delay(cb, ms) {
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
        return this.then( () => this.delay(cb, ms) );
      }
      
      // Create internal 'wait' promise using setTimeout
      let _wait = ms => new MyPromise( resolve => setTimeout(resolve, ms) );

      return _wait(ms).then(cb);
    }
  },
  mounted() {
    this.loadConfig()
  }
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
        #{math.div($i * 100%, $steps)} {
          $top: math.random(100);
          $space: 100 - $top;
          $bottom: if($space < 1, 1, math.random($space));
          clip-path: inset(#{ $top * 1% } 0 #{ $bottom * 1% }  0);
        }
      }
    }

    @keyframes noise-anim-2 {
      $steps: 20;

      @for $i from 0 through $steps {
        #{math.div($i * 100%, $steps)} {
          $top: math.random(100);
          $space: 100 - $top;
          $bottom: if($space < 1, 1, math.random($space));
          clip-path: inset(#{ $top * 1% } 0 #{ $bottom * 1% }  0);
        }
      }
    }

  }
</style>
