import store from '@/store'

export default {
  beforeEnter (to, from, next) {
    if (to.path === '/auth/logout') next()
    
    const { token } = store.state
    if (token) {
      next('/')
      return
    }
    
    next()
  },

  logout: {
    beforeEnter (to, from, next) {
      store.commit('auth/logout')
      next('/auth')
    }
  }
}
