<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item, index) in textList" :key="index" @click="itemClick(index)">
      <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 向父组件home传index，使用自定义事件
      this.$emit("itemIndex", index)
    }
  },
  props: {
    textList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .tab-control {
    width: 100%;
    display: flex;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    padding: 10px 0px;
  }

  .active{
    color: var(--color-high-text);
    border-bottom: var(--color-high-text) 3px solid;
    padding-bottom: 10px;
  }
</style>