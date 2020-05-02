<template>
  <div class="shopInfo">
    <img :src="shops.shopLogo" alt="">
    <div>{{shops.name}}</div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shopInfo {
    display: flex;
    background-color: #fff;
  }

  .shopInfo img {
    padding: 10px 20px;
    height: 60px;
  }

  .shopInfo div {
    font-size: 14px;
    padding: 30px 0px;
  }

</style>