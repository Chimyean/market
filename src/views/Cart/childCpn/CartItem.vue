<template>
  <div class="container">
    <div class="checkBox" @click="clickChecked">
      <div class="round" :class="{isChecked: cartItem.isChecked === true}"></div>
    </div>
    <div class="image">
      <img :src="cartItem.image" alt />
    </div>
    <div class="text">
      <div class="title">
        {{cartItem.name}}
      </div>
      <div class="desc">{{cartItem.desc}}</div>
      <div class="bottom">
        <div>{{cartItem.price}}</div>
        <div>x{{cartItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      }
    },
    // isChecked: {
    //   type: Boolean,
    //   default: false
    // }
  },
  methods: {
    clickChecked() {
      this.cartItem.isChecked = !this.cartItem.isChecked
      // console.log(this.cartItem.isChecked)
    }
  },
};
</script>

<style scoped>
  .container {
    padding: 5px;
    display: flex;
    /* height: 100px; */
    border-bottom: 3px solid rgba(233, 231, 231, 0.877);
  }

  .checkBox {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .round {
    width: 20px;
    height: 20px;
    /* background-color: var(--color-tint); */
    border-radius: 50%;
    border: 1px solid #ccc;
    background: url('~assets/img/cart/tick.svg') no-repeat;
    background-position: 1px 2px;
  }

  .isChecked {
    background: url('~assets/img/cart/tick.svg') no-repeat var(--color-tint);
    background-position: 1px 2px;
  }
 
  .image {
    flex: 3;
    padding: 5px;
  }

  .image img {
    height: 120px;
    border-radius: 5px;
  }

  .text {
    flex: 6;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }

  .title, .desc {
    width: 180px;
    flex: 2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desc {
    font-size: 14px;
  }

  .bottom {
    width: 95%;
    flex: 1;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
  }

  .bottom > div:nth-child(1) {
    color: var(--color-high-text);
  }

</style>