<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="image" alt @load="imageLoad" />
    <p>{{item.title}}</p>
    <span>{{item.price}}</span>
    <span class="collect">{{item.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  computed: {
    image() {
      return this.item.image || this.item.show.img;
    }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        // console.log(this.$route.path.indexOf("/home"))
        this.$bus.$emit("itemImageLoad");
      }
      // console.log(this.$bus)
    },
    // 点击跳转到详情页
    itemClick() {
      this.$router.push("/detail/" + this.item.iid);
    }
  }
};
</script>

<style scoped>
.goodsListItem {
  width: 45%;
  padding: 1%;
}

.goodsListItem img {
  width: 100%;
  border-radius: 5px;
}

.goodsListItem p {
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.collect::before {
  content: "";
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-left: 20px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

span {
  float: left;
}

span:not(.collect) {
  color: var(--color-high-text);
}
</style>