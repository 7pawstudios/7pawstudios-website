<template>
  <div
    class="countdown"
    :class="{ 'glitch': glitchActive }"
    :glitch-text="glitchText"
  >
    <!-- <span v-if="glitchTextToggle">
        Launch Date: 20.11.2020
    </span>
    <span v-else>
      {{ time }} To Go
    </span> -->
    <span>
      {{ glitchText }}
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
    glitchText() {
      return !this.switcher ? `${this.time} Remaining` : this.mainText
    }
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
          // Always store a string to avoid runtime mutation issues
          const asString = ts && ts.toString ? ts.toString() : String(ts)
          this.time = asString
          // Update scramble variant
          this.scrambleText[1] = `${asString} Remaining`
        },
        ~(Countdown.MONTHS | Countdown.WEEKS |Countdown.HOURS |Countdown.MINUTES | Countdown.SECONDS | Countdown.MILLISECONDS)
      )

      // define a handler that is called whenever text is scrambled.
      const handleScramble = (text) => {
        this.testText = text
      }

      setInterval(() => {
        this.switcher = !this.switcher

        // Trigger glitch for a longer burst
        $this.glitchActive = true
        setTimeout(() => { $this.glitchActive = false }, 1600)

        // scrambler start
        const textIndex = this.switcher ? this.scrambleText[1] : this.scrambleText[0]
        scrambler.scramble(textIndex, handleScramble)
      }, 3800)
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
    overflow: visible;

    // keep base text visible above backgrounds
    > span {
      position: relative;
      z-index: 3;
      display: inline-block;
      width: 100%;
    }

    &.glitch {
      // animated scanlines overlay while glitching
      background-image: repeating-linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.035) 0px,
        rgba(255, 255, 255, 0.035) 2px,
        transparent 2px,
        transparent 4px
      );
      background-size: 100% 4px;
      animation: scan-move 6s linear infinite;
      // ensure pseudo-elements line-wrap exactly like the visible text
      line-height: 1.2;
      white-space: normal;

      &::before, &::after {
        content: attr(glitch-text);
        font-size: 99%;
        top: 0;
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;
        background: $secondary;
        // overflow: hidden;
        mix-blend-mode: screen;
        will-change: transform, clip-path, opacity;
        z-index: 2;
        pointer-events: none;
        line-height: inherit;
        white-space: inherit;
      }

      &::before {
        left: -2px;
        text-shadow: 3px 0 #00aaff, -2px 0 #66e0ff; // retro blue/cyan
        filter: drop-shadow(0 0 3px rgba(0, 136, 255, 0.7));
        opacity: 0.85;
        animation:
          noise-anim-2 2.5s steps(20) infinite alternate-reverse,
          glitch-shift 1.3s steps(18) infinite alternate,
          glitch-skew 2.1s steps(12) infinite,
          glitch-blink 3.4s steps(30) infinite;
      }

      &::after {
        left: 2px;
        text-shadow: -3px 0 #ff2a6d, 2px 0 #ff66cc; // retro magenta/pink
        filter: drop-shadow(0 0 3px rgba(255, 51, 153, 0.7));
        opacity: 0.7;
        animation:
          noise-anim 1.8s steps(22) infinite alternate-reverse,
          glitch-shift 1s steps(16) infinite alternate-reverse,
          glitch-skew 2.6s steps(10) infinite reverse,
          glitch-blink 2.8s steps(28) infinite;
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

    // horizontal jitter
    @keyframes glitch-shift {
      0%   { transform: translateX(0); }
      10%  { transform: translateX(-2px); }
      20%  { transform: translateX(2px); }
      30%  { transform: translateX(-3px); }
      40%  { transform: translateX(3px); }
      50%  { transform: translateX(-1px); }
      60%  { transform: translateX(1px); }
      70%  { transform: translateX(-2px); }
      80%  { transform: translateX(2px); }
      90%  { transform: translateX(-1px); }
      100% { transform: translateX(0); }
    }

    // skew tear
    @keyframes glitch-skew {
      0%   { transform: skewX(0deg); }
      12%  { transform: skewX(2deg); }
      24%  { transform: skewX(-2deg); }
      36%  { transform: skewX(3deg); }
      48%  { transform: skewX(-3deg); }
      60%  { transform: skewX(1deg); }
      72%  { transform: skewX(-1deg); }
      84%  { transform: skewX(2deg); }
      100% { transform: skewX(0deg); }
    }

    // subtle flicker
    @keyframes glitch-blink {
      0%, 100% { opacity: 0.9; }
      5%  { opacity: 0.6; }
      10% { opacity: 0.95; }
      15% { opacity: 0.5; }
      25% { opacity: 0.85; }
      35% { opacity: 0.65; }
      60% { opacity: 0.9; }
      75% { opacity: 0.7; }
      85% { opacity: 0.95; }
    }

    // scanline drift
    @keyframes scan-move {
      0%   { background-position-y: 0; }
      100% { background-position-y: 4px; }
    }

  }
</style>
