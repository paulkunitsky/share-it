import API from '@/utils/axios-base-api'

export default {
  register: (user) => API.post('auth/register', user),
  login: (user) => API.post('auth/login', user),
  checkToken: (token) => API.post('auth/check-token', { token })
}
