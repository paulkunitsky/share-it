import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import RouterGuard from './guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

router.beforeEach(RouterGuard.beforeEach)

export default router
