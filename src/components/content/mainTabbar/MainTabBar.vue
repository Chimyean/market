<template>
  <div>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="#D4237A">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#D4237A">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="" />
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#D4237A">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="" />
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#D4237A">
        <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/user_active.svg" alt="" />
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBar_items'

export default {
  name: 'MainTabBar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style scoped>
  
</style>