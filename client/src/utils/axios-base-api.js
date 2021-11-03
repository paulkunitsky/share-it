import axios from 'axios'

const API = axios.create({
  baseURL: `${process.env.DOMAIN}`
})

export default API
