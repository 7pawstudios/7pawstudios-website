import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Import Vue fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faBars,
  faCaretLeft,
  faCaretRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const icons = [
  faArrowRight,
  faBars,
  faCaretLeft,
  faCaretRight,
  faEnvelope,
  faFacebookF,
  faLinkedinIn,
  faMapMarkerAlt,
  faPhone,
  faTimes,
  faTwitter,
  faWhatsapp
]

library.add(...icons)

const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
