import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    users: [],
    user: {},
    wishlistItems: [],
    item: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_USERS(state, users) {
      state.users = [...users]
    },
    SET_WISHLISTITEMS(state, wishlistItems) {
      state.wishlistItems = [...wishlistItems]
    }
  },
  actions: {
    fetchUsers({ commit }) {
      EventService.getUsers()
        .then(res => {
          commit('SET_USERS', res.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchUser({ commit, getters }, id) {
      let user = getters.getUserById(id)

      /* if user is found in users, do not user event service */
      if (user) {
        commit('SET_USER', user)
      } else {
        // fetch user data for single id
        EventService.getUser(id)
          .then(res => {
            commit('SET_USER', res.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    fetchWishlistItems({ commit }, userId) {
      // fetch user product data for single id
      EventService.getUserProducts(userId)
        .then(res => {
          commit('SET_WISHLISTITEMS', res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {},
  getters: {
    wishlistLength: state => {
      return state.wishlistItems.length
    },
    purchasedItemsLength: state => {
      return state.wishlistItems.filter(item => item.purchased).length
    },
    getUserById: state => id => {
      return state.users.find(user => user.id === parseInt(id))
    },
    getItemById: state => id => {
      return state.wishlistItems.find(item => item.id === parseInt(id))
    }
  }
})
