<template>
  <div>
    <nav-bar class="container">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="tabBar">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="{active: currentIndex === index}"
          class="tabBarItem"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Tabbar",
  components: {
    NavBar
  },
  data() {
    return {
      list: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
  created() {}
};
</script>

<style scoped>
.tabBar {
  display: flex;
  font-size: 12px;
}
.tabBarItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
}

.container {
  background-color: #fff;
  width: 100%;
}
</style>