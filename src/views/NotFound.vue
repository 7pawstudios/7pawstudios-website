<template>
  <section class="not-found">
    <h1 class="title">404</h1>
    <p class="subtitle">We tracked seven paws but the trail went cold.</p>

    <ul class="paws-grid" aria-label="Seven animal paws">
      <li class="paw-card rabbit">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Rabbit</span>
      </li>
      <li class="paw-card lynx">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Lynx</span>
      </li>
      <li class="paw-card fox">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Fox</span>
      </li>
      <li class="paw-card bear">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Bear</span>
      </li>
      <li class="paw-card cat">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Cat</span>
      </li>
      <li class="paw-card raccoon">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
        <span class="label">Raccoon</span>
      </li>
      <li class="paw-card tiger">
        <div class="paw" aria-hidden="true">
          <span class="toe t1"/><span class="toe t2"/><span class="toe t3"/><span class="toe t4"/>
          <span class="pad"/>
        </div>
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
// No additional logic needed for static 404 display
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

  // CSS paw built from a big pad + 4 toes
  .paw {
    position: relative;
    width: 56px;
    height: 56px;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));
    transform: translateZ(0);
  }

  .toe, .pad {
    position: absolute;
    display: block;
    background: $secondary;
    border-radius: 999px;
  }

  // main pad
  .pad {
    width: 34px;
    height: 28px;
    left: 50%;
    bottom: 6px;
    transform: translateX(-50%);
  }

  // toes
  .toe {
    width: 14px;
    height: 16px;
    top: 2px;
  }
  .toe.t1 { left: 4px; }
  .toe.t2 { left: 18px; }
  .toe.t3 { right: 18px; }
  .toe.t4 { right: 4px; }

  .label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.9;
  }

  // Species color accents
  .lynx .toe, .lynx .pad { background: linear-gradient(180deg, #cdbb9b, #9c815d); }
  .rabbit .toe, .rabbit .pad { background: linear-gradient(180deg, #f9cbe0, #d78bb3); }
  .fox .toe, .fox .pad { background: linear-gradient(180deg, #ffb36b, #ff7a3d); }
  .bear .toe, .bear .pad { background: linear-gradient(180deg, #c48a64, #8b5e3c); }
  .cat .toe, .cat .pad { background: linear-gradient(180deg, #96e6ff, #5db9e6); }
  .raccoon .toe, .raccoon .pad { background: linear-gradient(180deg, #c5ccd3, #7b8a97); }
  .tiger .toe, .tiger .pad { background: linear-gradient(180deg, #ffc26d, #ff9642); }

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
