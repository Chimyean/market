<template>
  <div class="content">
    <div class="div-icon">
      <div>
        <div class="icon-consult"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="icon-shop"></div>
        <p>店铺</p>
      </div>
      <div>
        <div class="icon-collect"></div>
        <p>收藏</p>
      </div>
    </div>

    <div class="div-button">
      <div @click="addToCart">
        加入购物车
      </div>
      <div>
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  },
}
</script>

<style scoped>
  .content {
    display: flex;
    height: 49px;

    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;

    background-color: white;
    z-index: 99999999999;
  }

  .div-icon {
    flex: 1;
    display: flex;
  }

  .div-icon > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-consult {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 25px;
    background-position: 0px -60px;
    width: 25px;
    height: 25px;
  }

  p {
    margin: 0px;
    font-size: 12px;
    padding-top: 2px;
  }

  .icon-shop {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 25px;
    background-position: 0px -112.5px;
    width: 25px;
    height: 25px;
  }

  .icon-collect {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 25px;
    background-position: 0px 0.1px;
    width: 25px;
    height: 25px;
  }
  
  .div-button {
    display: flex;
    flex: 1;
  }

  .div-button > div {
    flex: 1;
    width: 50%;
    line-height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .div-button > div:nth-child(1) {
    background-color: yellow;
  }

  .div-button > div:nth-child(2) {
    background-color: #D4237A;
    color: white;
  }

</style>