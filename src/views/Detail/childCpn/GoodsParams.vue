<template>
  <div v-if="Object.keys(goodsParams).lenght !== 0">
    <div align="center" class="title">商品参数</div>
    <!-- size -->
    <table class="tableStyle" cellspacing="0"> 
      <tr v-for="(tr, index) in goodsParams.sizes" :key="index">
        <td align="center" v-for="(td, index) in goodsParams.sizes[index]" :key="index">{{td}}</td>
      </tr>
    </table>
    <!-- info -->
    <table class="tableStyle" cellspacing="0">
      <tr v-for="(tr, index) in goodsParams.infos" :key="index">
        <td align="center">{{tr.key}}</td>
        <td class="value">{{tr.value}}</td>
      </tr>
    </table>
    <div>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsParams',
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .tableStyle{
    margin: 0 auto;
    width: 95%;
    font-size: 12px;
    margin-top: 10px;
  }
  .tableStyle td {
    padding: 15px 5px;
    border-top: 3px solid rgba(179, 179, 179, 0.137);
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  
  .value {
    width: 80%;
    color: var(--color-high-text)
  }
</style>