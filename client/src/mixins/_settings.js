export default {
  methods: {
    syncColorTheme () {
      const {settings} = this.$store.state
      const {theme} = this.$vuetify

      const merger = (settings.nightMode)
        ? settings.themes.dark
        : settings.themes.light

      Object.keys(merger).forEach(key => {
        theme[key] = merger[key]
      })
    }
  },

  computed: {
    settings () {return this.$store.state.settings},

    optimizedMode: {
      get () {
        return this.settings.optimizedMode
      },
      set () {
        this.$store.commit('settings/toggle', 'optimizedMode')
      }
    },
    showNotifications: {
      get () {
        return this.settings.showNotifications
      },
      set () {
        this.$store.commit('settings/toggle', 'showNotifications')
      }
    },

    nightMode: {
      get () {
        return this.settings.nightMode
      },
      set () {
        this.$store.commit('settings/toggleNightMode')
        this.$store.commit(
          'notify',
          `Night mode is turned ${this.settings.nightMode ? 'on':'off'}`
        )
        this.syncColorTheme()
      }
    },

    autoNightMode: {
      get () {
        return this.settings.autoNightMode
      },
      set () {
        this.$store.commit('settings/toggle', 'autoNightMode')
      }
    }
  },

  created () {
    this.syncColorTheme()
  },
}
