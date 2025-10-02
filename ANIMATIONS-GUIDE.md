# Animation Guide - 7Paw Studios

## Complete Animation Sequence

### 1. Logo Animation (Logo.vue)

**Stage 1: Stroke Drawing** (0-8s)
- Each polygon in the logo draws with a stroke animation
- Uses `strokeDashoffset` from full length to 0
- Staggered by 400ms per element
- Easing: `inOutSine`
- Duration: 1200ms per element

**Stage 2: Fill Fade** (overlaps at ~0.6s)
- Fill color animates from `transparent` to `#f4f1ed` (white)
- Staggered by 500ms per element
- Starts 1200ms before stroke ends (overlap)
- Duration: 1200ms per element

**Stage 3: V Letter Reveal** (triggers when Stage 1+2 complete)
- The "V" letter (with glow) fades in
- Opacity: 0 → 1
- Duration: 800ms
- Easing: `inOutSine`

**CSS Glow Effect** (continuous)
- The V letter has a pulsing glow via SVG filter
- Animation: `glow-beat` 2.5s infinite
- Flood opacity pulses: 1 → 0 → 1

### 2. STUDIOS Text Animation (Maintenance.vue)

**Triggers:** When Logo animation completes (`animationStage2 = true`)

**Delay:** 500ms after trigger

**Letters Order:** [4, 1, 6, 2, 5, 0, 3]
- S (index 0) = 5th to appear
- T (index 1) = 2nd to appear  
- U (index 2) = 7th to appear
- D (index 3) = Last to appear
- I (index 4) = 1st to appear
- O (index 5) = 3rd to appear
- S (index 6) = 4th to appear

**Two Simultaneous Animations:**

1. **Blur Effect**
   - Filter: `blur(5px)` → `blur(0px)`
   - Easing: `inOutBounce`
   - Delay: `order[i] * 400ms`

2. **Opacity Fade**
   - Opacity: 0 → 1
   - Easing: `inOutSine`
   - Delay: `order[i] * 350ms`

### 3. Initial CSS State

**Logo Polygons (`.cls-1`):**
```scss
.cls-1 {
  fill: none;              // No fill initially
  stroke: $text;           // White stroke
  stroke-width: 1px;
}
```

**V Letter (`.logo_v`):**
```scss
.logo_v {
  opacity: 0;              // Hidden initially
  fill: #f0a500;          // Orange color
}
```

**STUDIOS Text Spans:**
```scss
span {
  opacity: 0;              // Hidden initially
  filter: blur(5px);       // Blurred initially
}
```

## Animation Timeline

```
0ms     Logo stroke starts drawing (first polygon)
400ms   Second polygon starts
800ms   Third polygon starts
...
~6s     Logo fill starts fading in (overlapped)
~8s     Logo animation complete
        → animationStage2 = true
8.5s    STUDIOS animation starts
9s-12s  Letters appear in order: I, T, O, S, S, D, U
```

## Code Implementation

### Logo Setup (onMounted)

```javascript
// 1. Get polygons and setup stroke dash
const polygons = document.querySelectorAll('#logo-inner-container polygon.cls-1')

polygons.forEach(polygon => {
  const length = polygon.getTotalLength()
  polygon.style.strokeDasharray = length
  polygon.style.strokeDashoffset = length
  polygon.style.fill = 'transparent'
})

// 2. Create timeline
const tl = createTimeline({
  defaults: {
    ease: 'inOutSine',
    duration: 1200
  }
})

// 3. Add stroke animation
tl.add(animate('#logo-inner-container polygon.cls-1', {
  strokeDashoffset: { to: 0 },
  delay: utils.stagger(400)
}))

// 4. Add fill animation (overlapped)
tl.add(animate('#logo-inner-container polygon.cls-1', {
  fill: { to: '#f4f1ed' },
  delay: utils.stagger(500)
}), '-=1200')

// 5. Trigger next stage
tl.onComplete = () => {
  store.setAnimationStage2(true)
}
```

### V Letter Animation

```javascript
watch(animationStage2, (newValue) => {
  if (newValue === true) {
    animate('#logo-inner-container .logo_v', {
      opacity: { to: 1 },
      ease: 'inOutSine',
      duration: 800
    })
  }
})
```

### STUDIOS Animation

```javascript
const order = [4, 1, 6, 2, 5, 0, 3]

const startBlurAnimation = () => {
  animate('.bottom-text span', {
    filter: ['blur(5px)', 'blur(0px)'],
    ease: 'inOutBounce',
    delay: (el, i) => order[i] * 400
  })

  animate('.bottom-text span', {
    opacity: [0, 1],
    ease: 'inOutSine',
    delay: (el, i) => order[i] * 350
  })
}

watch(animationStage2, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      startBlurAnimation()
    }, 500)
  }
})
```

## Debugging

**Console Logs:**
- Logo completion: `"Done"` 
- STUDIOS start: `"Starting STUDIOS animation"`

**Check in Browser:**
1. Open DevTools Console
2. Should see "Done" after ~8 seconds
3. Should see "Starting STUDIOS animation" immediately after
4. Letters should appear in order over next 3-4 seconds

## Common Issues & Fixes

**Issue:** Logo doesn't draw
- **Fix:** Ensure polygons have `getTotalLength()` support (SVG only)

**Issue:** STUDIOS doesn't appear
- **Fix:** Check `animationStage2` is being set to `true`
- **Fix:** Verify initial CSS has `opacity: 0` and `filter: blur(5px)`

**Issue:** Timing is off
- **Fix:** Adjust stagger values (400ms, 500ms, 350ms)
- **Fix:** Adjust overlap value (`-=1200`)

---

All animations use **Anime.js v4** with modern API! 🎨

