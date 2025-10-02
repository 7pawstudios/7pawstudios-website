# 7Paw Studios Website

> An indie game dev start-up made up of cultured game enthusiasts.

Built with **Vue 3**, **Vite**, and **Pinia** for blazing-fast performance.

## ✨ Features

- 🚀 **Vue 3** with Composition API
- ⚡ **Vite** - Lightning fast dev server & builds
- 🎨 **Sass/SCSS** - Modern CSS preprocessing
- 🗂️ **Pinia** - Intuitive state management
- 🎭 **Anime.js** - Smooth animations
- 📱 **PWA Ready** - Progressive Web App support
- 🎯 **Vue Router 4** - Client-side routing
- 🎨 **FontAwesome** - Icon library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended)
- npm 9+

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server at http://localhost:3900
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
7pawstudios-website/
├── src/
│   ├── assets/          # Static assets & SCSS
│   │   ├── fonts/       # Custom fonts (Orbitron)
│   │   └── scss/        # Global styles & variables
│   ├── components/      # Vue components
│   │   ├── CountDown.vue
│   │   ├── Footer.vue
│   │   ├── Logo-Icon.vue
│   │   └── Logo.vue
│   ├── router/          # Vue Router config
│   ├── store/           # Pinia store
│   ├── views/           # Page components
│   │   ├── Maintenance.vue
│   │   └── NotFound.vue
│   ├── App.vue          # Root component
│   └── main.js          # App entry point
├── public/              # Static public assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.5.13 | Frontend framework |
| Vite | 6.0.5 | Build tool & dev server |
| Vue Router | 4.5.0 | Client-side routing |
| Pinia | 2.2.8 | State management |
| Sass | 1.79.4 | CSS preprocessing |
| Anime.js | 3.2.2 | Animation library |
| FontAwesome | 6.7.1 | Icon library |

## 🎨 Customization

### Styling
Global styles and variables are in `src/assets/scss/`:
- `_variables.scss` - Colors, fonts, breakpoints
- `_mixins.scss` - Reusable SCSS mixins
- `_wrappers.scss` - Layout utilities

### PWA Configuration
Edit PWA settings in `vite.config.js`:
```javascript
VitePWA({
  manifest: {
    name: '7PawStudios',
    theme_color: '#1a1c20',
    // ... other options
  }
})
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at port 3900 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run publish` | Push to git repository |

## 🔧 Configuration

### Path Aliases
The following aliases are configured in `vite.config.js`:

- `@/` → `src/`
- `@components` → `src/components/`
- `@views` → `src/views/`
- `@assets` → `src/assets/`
- (and more...)

### Dev Server
- **Port**: 3900
- **Hot Module Replacement**: Enabled
- **HTTPS**: Disabled (can be enabled in config)

## 🚢 Deployment

Build the project:
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📚 Migration Notes

This project was recently migrated from Vue 2 + Vue CLI to Vue 3 + Vite. 

See [MIGRATION.md](./MIGRATION.md) for detailed migration notes and breaking changes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Credits

**Made by UXBuilt**
- Website: [uxbuilt.com](https://www.uxbuilt.com)

---

Built with ❤️ by the 7Paw Studios team
