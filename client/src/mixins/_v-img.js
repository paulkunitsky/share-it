export default {
  data: () => ({
    weTurnedNightModeOn: false,
    weTurnedNotificationsOff: false,
  }),

  computed: {
    nightMode: {
      get () {return this.$store.state.settings.nightMode},
      set (v) {this.$store.commit('settings/setNightMode', v)}
    },

    showNotifications: {
      get () {return this.$store.state.settings.showNotifications},
      set (v) {this.$store.commit('settings/setShowNotifications', v)}
    }
  },

  methods: {
    onGalleryOpen () {
      if (this.nightMode || this.$store.state.settings.optimizedMode) return

      if (this.showNotifications) {
        this.showNotifications = false
        this.weTurnedNotificationsOff = true
      }
      this.nightMode = true
      this.weTurnedNightModeOn = true
    },

    onGalleryClose () {
      if (!this.weTurnedNightModeOn) return

      if (this.weTurnedNotificationsOff) {
        this.weTurnedNotificationsOff = false
        this.showNotifications = true
      }

      this.nightMode = false
      this.weTurnedNightModeOn = false
    },
  }
}
