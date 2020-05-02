<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      // this.scroll.refresh()
      this.$emit('scroll', position)
    })
    // 上拉加载更多
    this.scroll.on('pullingUp', () => {
      console.log('上拉！')
      this.$emit('pullingUp')
    })


  },
  methods: {
    finishPullingUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
  
</style>