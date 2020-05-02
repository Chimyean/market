<template>
  <div id="home">
    <nav-bar class="navBar">
      <div slot="center">爱购物</div>
    </nav-bar>
    <tab-control
        :textList="['流行','新款','精选']"
        class="copyTabControl"
        @itemIndex="changeTabControl"
        ref="tabControlCopy"
        v-show="isCTabShow"
      ></tab-control>
    <home-scroll class="content" ref="homeScroll" :pull-up-load="true" @pullingUp="pullingUp">
      <home-swiper :banners="banners" @imageLoad="imgLoad"></home-swiper>
      <recommend-view :list="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :textList="['流行','新款','精选']"
        class="tabControl"
        @itemIndex="changeTabControl"
        ref="tabControl"
      ></tab-control>
      <goods-list :goodsList="goods[goodsType].list"></goods-list>
    </home-scroll>
    <back-top class="backtop" @click.native="backTop" v-if="isShow"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "views/Home/childCpn/HomeSwiper";
import RecommendView from "views/Home/childCpn/RecommendView";
import FeatureView from "views/Home/childCpn/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import HomeScroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getGoodsData } from "network/home.js";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    HomeScroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: "pop",
      isShow: false,
      // 获取tabControl
      tabOffsetTop: 0,
      isCTabShow: false
    };
  },
  computed: {},
  created() {
    this.getHomeMultidata();

    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  mounted() {
    // 滚动到一定位置出现backtop按钮
    this.$refs.homeScroll.scroll.on("scroll", position => {
      if (position.y < -1200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      // 让复制的tabControl固定
      if(-position.y > this.tabOffsetTop) {
        this.isCTabShow = true
      } else {
        this.isCTabShow = false
      }
    });
    // 监听图片加载完成事件
    // const refresh = this.debounce(this.$refs.homeScroll.scroll.refresh, 200)
    this.$bus.$on("itemImageLoad", () => {
      // console.log('-----')
      this.$refs.homeScroll.scroll.refresh();
      // refresh()
      // console.log(this.$refs.homeScroll.scroll)
    });
  },
  methods: {
    // 防抖函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    // 导航改变时切换
    changeTabControl(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
      }
      this.$refs.tabControlCopy.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },

    // 获取商品列表
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        console.log(res);
        this.recommend = res.data.recommend.list;
      });
    },
    // 获得数据
    getGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then(res => {
        // 数组解构ES6
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type].list);
        this.goods[type].page++;

        // 默认情况 上拉加载更多只能实现一次 所以在每次执行完后要把它清除掉
        this.$refs.homeScroll.finishPullingUp();
      });
    },
    // 按钮回到顶部
    backTop() {
      console.log(this.$refs);
      // 获得组件homeScroll
      this.$refs.homeScroll.scroll.scrollTo(0, 0, 500);
    },
    // 上拉加载更多
    pullingUp() {
      this.getGoodsData(this.goodsType);
      // console.log(this.goodsType);
    },
    // 监听图片加载完后tabControl的高度
    imgLoad() {
      // 获取tabOffsetTop 注意组件是没有offsetTop这个属性的 所以要拿组件内部的元素
      // 组件有一个属性$el获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.tabOffsetTop)
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.navBar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
}

.tabControl {
  margin-top: 10px;
  /* position: sticky; */
  top: 44px;
  background: white;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0px;
  right: 0px;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
} */

.backtop {
  position: fixed;
  bottom: 55px;
  right: 15px;
}

.copyTabControl {
  position: fixed;
  /* margin-top: 10px; */
  /* position: sticky; */
  background: white;
  z-index: 999;
}
</style>