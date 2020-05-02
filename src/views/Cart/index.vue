<template>
  <div class="view">
    <nav-bar class="navBar">
      <div slot="center">购物车（{{getCartNum}}）</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-item 
      v-for="(item, index) in allCartList" 
      :key="index" 
      :cart-item="item"></cart-item>
    </scroll>
    <bottom-bar :good-list="allCartList"></bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"

import CartItem from "./childCpn/CartItem"
import BottomBar from "./childCpn/BottomBar"

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartItem,
    BottomBar
  },
  data() {
    return {
      allCartList: []
    }
  },
  computed: {
    getCartNum() {
      return this.$store.state.cartList.length
    }
  },
  created() {
    this.allCartList = this.$store.state.cartList
  },
  activated() {
    // 解决返回页面出现无法滚动的现象，即是keep-alive的同时，每次返回刷新一次scroll
    this.$refs.scroll.scroll.refresh()
  },
}
</script>
<style scoped>
  .view {
    height: 100vh;
  }

  .navBar {
    background-color: var(--color-tint);
    color: white;
  }

  .scroll {
    width: 100%;
    overflow: hidden;
    height: calc(100% - 93px - 40px);
  }


  ul {
    margin: 0;
    padding: 0;
  }
</style>