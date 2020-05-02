<template>
  <div>
    <div class="recommend">
      <div class="recommendItem" v-for="(item, index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0px;
  border-bottom: 10px solid #eee ;
}

.recommendItem {
  flex: 1;
  text-align: center;
}

.recommendItem img {
  width: 85%;
}
</style>