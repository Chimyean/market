<template>
  <div class="bottomBar">
    <div class="selectAll">
      <div class="checkBox" @click="checkedAllItems">
        <div class="round" :class="{isChecked: checkedAll}"></div>&nbsp;&nbsp;全选
      </div>
    </div>
    <div class="price">￥总计：{{priceAll}}</div>
    <div class="bingo">去结算</div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      isChecked: false
    };
  },
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    // console.log("----", this.goodList);
  },
  methods: {
    checkedAllItems() {
      // console.log(this.checkedAll)
      if (this.checkedAll === false) {
        for (let i in this.$store.state.cartList) {
          this.$store.state.cartList[i].isChecked = true;
        }
      } else {
        for (let i in this.$store.state.cartList) {
          this.$store.state.cartList[i].isChecked = false;
        }
      }
    }
  },
  computed: {
    priceAll() {
      if (this.$store.state.cartList !== 0) {
        return this.$store.state.cartList
          .filter(item => {
            return item.isChecked;
          })
          .reduce((preVal, value) => {
            return preVal + parseInt(value.price);
          }, 0)
          .toFixed(2);
      }
    },
    checkedAll() {
      if (this.$store.state.cartList.length === 0) {
        return false;
      }
      return !this.$store.state.cartList.find(item => !item.isChecked);
    }
  }
};
</script>

<style scoped>
.bottomBar {
  display: flex;
  justify-content: space-between;

  position: relative;
  /* bottom: 40px; */
  height: 40px;
  left: 0;
  right: 0;

  font-size: 15px;
  background: rgb(233, 231, 231);
}

.selectAll {
  width: 22%;
}

.checkBox {
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.round {
  width: 18px;
  height: 18px;
  /* background-color: var(--color-tint); */
  border-radius: 10%;
  border: 1px solid #ccc;
  background: url("~assets/img/cart/tick.svg") no-repeat;
  background-position: 1px 1px;
}

.isChecked {
  background: url("~assets/img/cart/tick.svg") no-repeat var(--color-tint);
  background-position: 1px 1px;
}

.price {
  height: 40px;
  line-height: 40px;
  /* text-align: center; */
  width: 43%;
}

.bingo {
  width: 30%;
  height: 40px;
  background: var(--color-tint);
  line-height: 40px;
  text-align: center;
  color: white;
}
</style>