<template>
    <div class="tabbar-item" @click="routerClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive === true ? {color: this.activeColor} : {}
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods: {
    routerClick() {
      // console.log(this.path)
      this.$router.replace(this.path)
    }
  },
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
}
.tabbar-item img {
  width: 36px;
  height: 36px;
  margin: 3px;
}

.tabbar-item p {
  margin: 0px;
  margin-top: -8px;
}

/* .active {
  color: #D4237A;
} */
</style>