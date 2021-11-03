export default {
  state: {
    optimizedMode: false,
    showNotifications: true,
    nightMode: false,
    autoNightMode: true,
    themes: {
      light: {
        primary: '#1976D2'
      },
      dark: {
        primary: '#111111'
      }
    },
  },

  mutations: {
    setNightMode (state, payload) {
      state.nightMode = payload
    },

    setShowNotifications (state, payload) {
      state.showNotifications = payload
    },

    toggle (state, setting) {
      state[setting] = !state[setting]
    },

    toggleNightMode (state) {
      state.nightMode = !state.nightMode
    }
  }
}
