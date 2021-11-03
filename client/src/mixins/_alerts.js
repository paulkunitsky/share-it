export default {
  computed: {
    successVisible: {
      get () {return !!this.success},
      set () {this.success = null}
    },
    errorVisible: {
      get () {return !!this.error},
      set () {this.error = null}
    }
  },
  data: () => ({
    error: null,
    success: null
  })
}
