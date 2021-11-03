import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

/** global store module */
import global from '@/app/store'

/** store modules */
import auth from '@/app/modules/auth/store'
import messages from '@/app/modules/messages/store'
import discover from '@/app/modules/discover/store'
import settings from '@/app/modules/settings/store'

Vue.use(Vuex)

export default new Vuex.Store({

  ...global,

  modules: {
    auth: {
      namespaced: true,
      ...auth
    },
    messages: {
      namespaced: true,
      ...messages
    },
    settings: {
      namespaced: true,
      ...settings
    },
    discover: {
      namespaced: true,
      ...discover
    }
  },

  plugins: [createPersistedState()]
})
