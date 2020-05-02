<template>
  <div>
    <div class="mainDetail">
      <p>{{goods.title}}</p>
      <div class="showPrice">
        <span>{{goods.newPrice}}</span>
        <span>
          <del>{{goods.oldPrice}}</del>
        </span>
        <span v-if="goods.discount">{{goods.discount}}</span>
      </div>
    </div>
    <div class="centerDetail">
      <p v-for="(item, index) in goods.columns" :key="index">{{item}}</p>
    </div>
    <div class="bottomDetail">
      <div v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      services: []
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.mainDetail p {
  padding: 0 10px;
  font-weight: bold;
  margin-bottom: 5px;
}

.showPrice {
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 30px;
}

.showPrice span {
  display: block;
  margin-right: 10px;
}

.showPrice span:nth-child(1) {
  color: var(--color-tint);
  font-size: 20px;
}

.showPrice span:nth-child(2) {
  font-size: 12px;
}

.showPrice span:nth-child(3) {
  border-radius: 10px;
  background-color: var(--color-tint);
  line-height: 20px;
  height: 20px;
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 0 8px;
}

.centerDetail {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}

.centerDetail p {
  /* flex: 1; */
  font-size: 12px;
  margin: 10px 0px;
  color: #b4b3b3;
}

.bottomDetail {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;
}

.bottomDetail > div {
  flex: 1;
  font-size: 12px;
  /* color: #a7a6a6; */
}

.bottomDetail img {
  width: 10px;
}
</style>