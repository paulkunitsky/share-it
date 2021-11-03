/**
 * under development
 */
import API from '@/utils/axios-base-api'
import store from '@/store'

export default {
  getTalks: () => API.get(`${store.state.auth.user._id}/talks`)
}
