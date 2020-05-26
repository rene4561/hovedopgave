import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/customize',
    name: 'Customize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "customize" */ '../views/Customize.vue'),
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "404NotFound" */ '../views/404NotFound.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router