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
  getUser(userId) {
    return apiClient.get(`/users/${userId}`)
  },
  getUserProducts(userId) {
    return apiClient.get(`/products/${userId}`)
  },
  getProduct(userId, productId) {
    return apiClient.get(`/products/${userId}/${productId}`)
  }
}
