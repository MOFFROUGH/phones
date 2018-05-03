import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loading: false,
    products: [
      {id: 1, src: '/static/img/phones/1.jpeg', name: 'Phone', price: 5000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 2, src: '/static/img/phones/2.jpeg', name: 'Phone', price: 5000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 3, src: '/static/img/phones/3.jpeg', name: 'Phone', price: 1000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 4, src: '/static/img/phones/10.jpeg', name: 'Phone', price: 2340, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 5, src: '/static/img/phones/11.jpeg', name: 'Phone', price: 6500, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 6, src: '/static/img/phones/12.jpeg', name: 'Phone', price: 2560, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 7, src: '/static/img/phones/13.jpeg', name: 'Phone', price: 1000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 8, src: '/static/img/phones/14.jpeg', name: 'Phone', price: 7000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'sittingroom'},
      {id: 9, src: '/static/img/phones/15.jpeg', name: 'Phone', price: 1000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 10, src: '/static/img/phones/16.jpeg', name: 'Phone', price: 5300, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 11, src: '/static/img/phones/17.jpeg', name: 'Phone', price: 3000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'sittingroom'},
      {id: 12, src: '/static/img/phones/18.jpeg', name: 'Phone', price: 2000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'phones'},
      {id: 13, src: '/static/img/tablets/1.jpeg', name: 'Tab', price: 3000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 14, src: '/static/img/tablets/2.jpeg', name: 'Tablet', price: 14000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 15, src: '/static/img/tablets/3.jpeg', name: 'Tablet 17"', price: 14000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 16, src: '/static/img/tablets/4.jpeg', name: 'Samsung Tablet 14"', price: 15000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 20, src: '/static/img/tablets/5.jpeg', name: 'Samsung Tablet 14"', price: 15000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 17, src: '/static/img/tablets/6.jpeg', name: 'Tablet 17"', price: 14000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'tablets'},
      {id: 18, src: '/static/img/accessories/1.jpeg', name: 'Phone Holder', price: 14000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'accessories'},
      {id: 21, src: '/static/img/accessories/2.jpeg', name: 'USB cable', price: 15000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'accessories'},
      {id: 19, src: '/static/img/accessories/3.jpeg', name: 'Charger', price: 15000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'accessories'}
    ],
    cart: [
      {id: 1, src: '/static/img/accessories/4.jpeg', name: 'Great Bed', price: 25000, color: 'aluminium', description: 'Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.', category: 'accessories', quantity: 1}
    ]
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    addtocart (state, payload) {
      const indexItem = state.cart.findIndex(x => x.id === payload.index)
      if (indexItem >= 0) {
        payload.product.quantity += 1
      } else {
        payload.product.quantity = 1
        state.cart.push(payload.product)
      }
    },
    removeFromCart (state, payload) {
      const indexItem = state.cart.findIndex(x => x.id === payload.index)
      if (indexItem >= 0) {
        payload.product.quantity -= 1
      } else {
        //
      }
    }
  },
  actions: {
    setProducts ({commit}, payload) {
      commit('setLoading', true)
      // manage the payload layout form api
      commit('setProducts', payload)
      commit('setLoading', false)
    },
    addtocart ({commit, state}, payload) {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(payload)
      })
      let stuff = {
        product: product,
        index: payload
      }
      commit('addtocart', stuff)
    },
    removeFromCart ({commit, state}, payload) {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(payload)
      })
      let stuff = {
        product: product,
        index: payload
      }
      commit('removeFromCart', stuff)
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getLoading (state) {
      return state.loading
    },
    getFeaturedProducts (state) {
      return state.products.slice(2, 8)
    },
    getOneProduct: (state) => (id) => {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(id)
      })
      return product
    },
    getFilteredProducts: (state) => (category) => {
      return state.products.filter(function (item) {
        return item.category === category
      })
    },
    getSearchProducts: (state) => (search) => {
      // var self = this
      return state.products.filter(function (cust) {
        return cust.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 || cust.category.toLowerCase().indexOf(search.toLowerCase()) >= 0 || cust.color.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
        cust.description.toLowerCase().indexOf(search.toLowerCase()) >= 0
      })
    },
    inCart: (state) => {
      return state.cart
    }
  }
})
