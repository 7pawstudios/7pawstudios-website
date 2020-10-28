import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@views/Home'
// import Services from '@views/Services'
// import Sectors from '@views/Sectors'
// import Team from '@views/Team'
// import Clients from '@views/Clients'
// import Contact from '@views/Contact'
import Maintenance from '@views/Maintenance'
import NotFound from '@views/NotFound'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services
  //   // component: () => import(/* webpackChunkName: "services" */ '@views/Services.vue')
  // },
  // {
  //   path: '/sectors',
  //   name: 'Sectors',
  //   component: Sectors
  //   // component: () => import(/* webpackChunkName: "sectors" */ '@views/Sectors.vue')
  // },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: Team
  // },
  // {
  //   path: '/clients',
  //   name: 'Clients',
  //   // component: Clients,
  //   component: () => import(/* webpackChunkName: "clients" */ '@views/Clients.vue')

  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact,
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
