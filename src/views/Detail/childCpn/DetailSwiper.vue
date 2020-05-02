<template>
    <swiper class="swiperItem">
      <swiper-item v-for="(item, index) in topImage" :key="index">
        <img :src="item" alt="" >
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swipper/index";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    
  }
};
</script>

<style scoped>
.swiperItem {
  height: 300px;
}
</style>