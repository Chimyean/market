<template>
  <div>
    <div align="center" class="title">商品详情</div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="showImage" v-for="(item, index) in imageList" :key="index">
      <img :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContent',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      imageList: []
    }
  },
  mounted() {
    
  },
  watch: {
    detailInfo(newVal) {
      this.imageList = newVal.detailImage[0].list
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  },
}
</script>

<style scoped>
  .desc {
    padding: 20px 10px;
    font-size: 12px;
    line-height: 15px;
    width: 85%;
    border-top: 1px solid var(--color-tint);
    border-bottom: 1px solid var(--color-tint);
    margin: 10px auto;
    text-align: center;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    padding-top: 10px;
    border-top: 3px solid rgba(223, 221, 221, 0.281);
  }

  .showImage img {
    width: 100%;
  }
</style>