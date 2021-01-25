import { createStore } from 'vuex'

export default createStore({
  state: {
    userx: {
      id: 1,
      firstName: 'larry',
      shortName: 'l',
      lastName: 'miles',
      profileMessage: 'vuex!!'
    },
    wishlistItemsx: [
      {
        id: 3,
        name: 'Mini Smart Plug That Has A long Name',
        shortName: null,
        estCost: '18.53',
        url: 'http://www.google.com',
        description: 'Mini Smart Plug',
        purchased: false,
        image: 'https://odadee.net/themes/default/assets/images/default.jpg',
        userId: 1
      },
      {
        id: 4,
        name:
          "JavaScript QuickStart Guide: The Simplified Beginner's Guide to JavaScript",
        shortName: 'JS Quickstart Guide',
        estCost: '11.51',
        url: 'https://www.google.com',
        description:
          "Do you want to learn JavaScript but don't know where to start? Are you overwhelmed by the 1,000 page long books that simply have TOO much information and are impossible to follow? Do you want to be up and running with JavaScript in just a few hours? Do you like getting the best 'bang' for your 'buck'? (Of course you do!) \nIf so, then look no further. \"JavaScript QuickStart Guide will take you step-by-step through the learning process so you will understand the fundamentals of JavaScript and how to integrate JavaScript into your web pages in minutes! \nAre you looking to change careers to something that will pay you more and have more flexibility? Are you looking to learn just for fun on the side? No matter why you want to learn JavaScript the \"JavaScript QuickStart Guide\" has you covered.",
        purchased: true,
        image: 'https://odadee.net/themes/default/assets/images/default.jpg',
        userId: 1
      },
      {
        id: 5,
        name: 'Essential Oils Gift Set By Pollywhirl Has A long Name',
        shortName: null,
        estCost: '50.99',
        url: 'http://www.google.com',
        description: 'blue',
        purchased: true,
        image: 'https://odadee.net/themes/default/assets/images/default.jpg',
        userId: 1
      },
      {
        id: 7,
        name: 'Perfum',
        shortName: null,
        estCost: '50.99',
        url: 'http://www.google.com',
        description: 'blue',
        purchased: true,
        image: 'https://odadee.net/themes/default/assets/images/default.jpg',
        userId: 1
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    wishlistLength: state => {
      return state.wishlistItemsx.length
    },
    purchasedItemsLength: state => {
      return state.wishlistItemsx.filter(item => item.purchased).length
    },
    getItemById: state => id => {
      return state.wishlistItemsx.find(item => item.id === id)
    }
  }
})
