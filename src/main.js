import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

// Import Vue fontawesome
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//   faArrowRight,
//   faBars,
//   faCaretLeft,
//   faCaretRight,
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhone,
//   faTimes
// } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// const icons = [
//   faArrowRight,
//   faBars,
//   faCaretLeft,
//   faCaretRight,
//   faEnvelope,
//   faFacebookF,
//   faLinkedinIn,
//   faMapMarkerAlt,
//   faPhone,
//   faTimes,
//   faTwitter,
//   faWhatsapp
// ];

// library.add(...icons);

// Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
