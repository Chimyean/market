<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swipper/index.js";

export default {
  data() {
    return {
      // 记录图片加载状态 为了只让图片在加载一次的时候发送监听
      isLoad: false
    };
  },
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 在img标签中添加了@load监听图片是否加载完 加载完毕执行函数
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true
      }
      // console.log('-------')
    }
  }
};
</script>