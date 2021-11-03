import store from '@/store'
import tokenChecker from '@/utils/token-checker'

export default {
  beforeEach (to, from, next) {
    if (store.state.auth.authorized === false && to.path !== '/auth') {
      next({ path: '/auth' })
      return
    }
    if (to.path === '/settings') {
      next()
      return
    }
  
    /** progress start */
    // store.commit('progressBarActive', true)
    // store.commit('progressBarActive', false)
    next()
    return
    
    tokenChecker
      .check(token)
      .then(valid => {
        if (!valid) {
          store.commit('auth/logout')
        }
        /** progress done */
        store.commit('progressBarActive', false)
        next()
      })
  }
}
