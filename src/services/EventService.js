import axios from 'axios'

// Single axios instance for the entire app
const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: false
})

export default {
  getUsers() {
    return apiClient.get('/users')
  },
  getUserProducts(id) {
    return apiClient.get(`/products/${id}`)
  }
}
