import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储加入购物车的商品信息
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // 判断是否是已加入购物车的商品
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      if(oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }

      console.log('cartList', state.cartList)
    }
  },
  actions: {
  },
  modules: {
  }
})
