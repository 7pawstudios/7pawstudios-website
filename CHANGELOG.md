# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2025-10-02

### 🚀 Major Upgrade: Anime.js v4

#### Added
- **Anime.js v4.2.0** - Latest animation library with modern API
- New modular import system for better tree-shaking
- Enhanced SVG animation support with `draw` property
- Improved timeline creation with `createTimeline()`
- Better stagger utilities with `utils.stagger()`

#### Changed
- **Breaking:** Migrated all animations from v3 to v4 API
  - `anime()` → `animate(targets, params)`
  - `anime.timeline()` → `createTimeline()`
  - `easing` → `ease` parameter
  - `anime.setDashoffset` → `draw: [0, 100]`
  - Easing names shortened (e.g., `easeInOutSine` → `inOutSine`)
- Updated `Logo.vue` animations to use new API
- Updated `Maintenance.vue` animations to use new API
- Keyframes now use `to` property instead of `value`

#### Documentation
- Added `ANIMEJS-MIGRATION.md` - Complete v3 to v4 migration guide
- Updated `README.md` with v4.2.0 version
- Updated `MIGRATION.md` with anime.js changes

## [0.2.0] - 2025-10-02

### 🎯 Major Migration: Vue 3 + Vite

#### Added
- **Vue 3.5.13** with Composition API
- **Vite 6.0.5** build tool and dev server
- **Pinia 2.2.8** state management
- **Vue Router 4.5.0** for routing
- **FontAwesome 6.7.1** with Vue 3 support
- **Vite PWA Plugin** for progressive web app features
- Modern Sass with `@use`/`@forward` module system
- Zero Sass deprecation warnings

#### Changed
- **Breaking:** Migrated from Vue 2 to Vue 3
  - All components use `<script setup>` syntax
  - Vuex replaced with Pinia
  - Options API replaced with Composition API
- **Breaking:** Migrated from Vue CLI to Vite
  - Faster dev server with HMR
  - Faster production builds
  - ES modules support
- **Breaking:** Replaced `node-sass` with modern `sass`
- Updated all components to Composition API:
  - `App.vue`
  - `Logo.vue`
  - `Logo-Icon.vue`
  - `CountDown.vue`
  - `Footer.vue`
  - `Maintenance.vue`
  - `NotFound.vue`

#### Removed
- `vue.config.js` (replaced by `vite.config.js`)
- `babel.config.js` (Vite uses esbuild)
- `src/registerServiceWorker.js` (handled by vite-plugin-pwa)
- All Vue 2 dependencies

#### Documentation
- Added `MIGRATION.md` - Complete Vue 2 to 3 migration guide
- Added `SASS-MIGRATION.md` - Sass module system guide
- Updated `README.md` with new tech stack
- Added `.gitignore` entries for Vite

#### Performance
- Bundle size: 205 KB (gzipped: 75 KB)
- Dev server startup: ~100ms
- Production build: ~800ms
- Zero vulnerabilities

## [0.1.0] - Initial Release

### Added
- Initial Vue 2 + Vue CLI setup
- Basic website structure
- Maintenance page with animations
- Logo animations with Anime.js v3
- FontAwesome icons
- PWA support
- SCSS styling with variables and mixins

---

## Migration Notes

### From v0.2.0 to v0.3.0
- No breaking changes for users
- All animations maintain visual parity
- Bundle size increased by 16 KB for enhanced features

### From v0.1.0 to v0.2.0
- **Major breaking changes** - Complete framework migration
- See `MIGRATION.md` for detailed upgrade path
- All components rewritten in Vue 3 Composition API
- New build system requires Node.js 18+

---

## Links
- [Anime.js v4 Migration](./ANIMEJS-MIGRATION.md)
- [Vue 3 Migration](./MIGRATION.md)
- [Sass Migration](./SASS-MIGRATION.md)

