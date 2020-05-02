<template>
  <div class="detailOuter">
    <tab-bar class="tabBar" @itemClick="tabBarClick" ref="nav"></tab-bar>
    <detail-scroll class="betterScroll" ref="detailScroll" @scroll="contentScroll">
      <detail-swipper :top-image="topImage"></detail-swipper>
      <description :goods="goods"></description>
      <shop-info :shops="shopInfo"></shop-info>
      <detail-content :detail-info="detailInfo" @imageLoad="imageLoad"></detail-content>
      <goods-params ref="params" :goods-params="goodsParams"></goods-params>
      <rate ref="rate" :rate="rate"></rate>
      <goods-list ref="list" :goods-list="recommend"></goods-list>
    </detail-scroll>
    <back-top class="backtop" @click.native="backTop" v-if="isShow"></back-top>
    <description-bottom-bar @addToCart="addToCart"></description-bottom-bar>
  </div>
</template>

<script>
import TabBar from "./childCpn/TabBar";
import DetailSwipper from "./childCpn/DetailSwiper";
import Description from "./childCpn/Description";
import ShopInfo from "./childCpn/ShopInfo";
import DetailContent from "./childCpn/DetailContent";
import GoodsParams from "./childCpn/GoodsParams";
import Rate from "./childCpn/Rate";
import DescriptionBottomBar from "./childCpn/DescriptionBottomBar";

import GoodsList from "components/content/goodsList/GoodsList";

import DetailScroll from "components/common/scroll/Scroll";

import {backTopMixin} from "common/mixin.js";

import {
  getGoodsDetail,
  Goods,
  Shops,
  GoodsParam,
  getRecommend
} from "network/detail.js";

export default {
  name: "Detail",
  components: {
    TabBar,
    DetailSwipper,
    Description,
    ShopInfo,
    DetailScroll,
    DetailContent,
    GoodsParams,
    GoodsList,
    Rate,
    DescriptionBottomBar
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      recommend: [],
      rate: [],
      topYs: []
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.$route.params.iid);
    // 获得轮播图图片
    getGoodsDetail(this.iid).then(res => {
      console.log(res);
      this.topImage = res.result.itemInfo.topImages;

      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopInfo = new Shops(res.result.shopInfo);
      console.log('thisgood', this.goods.realPrice)

      // 获取商品详情信息
      this.detailInfo = res.result.detailInfo;
      console.log(this.detailInfo);

      // 获取商品参数信息
      this.goodsParams = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      console.log(this.goodsParams);

      // 评论数据
      this.rate = res.result.rate.list;
    });
    // 获取商品推荐数据
    getRecommend().then(res => {
      console.log("recommend", res.data.list);
      this.recommend = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.detailScroll.scroll.refresh();

      this.topYs = []
      this.topYs.push(0)
      this.topYs.push(this.$refs.params.$el.offsetTop - 44)
      this.topYs.push(this.$refs.rate.$el.offsetTop - 44)
      this.topYs.push(this.$refs.list.$el.offsetTop - 44)
    },
    tabBarClick(index) {
      // console.log(index)
      this.$refs.detailScroll.scroll.scrollTo(0, -this.topYs[index], 200);
    },
    contentScroll(position) {
      // console.log(position)
      for(let i=0;i<this.topYs.length;i++) {
        // console.log(this.topYs[i])
        if(-position.y >=0 && -position.y < this.topYs[1]) {
          this.$refs.nav.currentIndex = 0
        } else if (-position.y >= this.topYs[1] && -position.y < this.topYs[2]) {
          this.$refs.nav.currentIndex = 1
        } else if (-position.y >= this.topYs[2] && -position.y < this.topYs[3]) {
          this.$refs.nav.currentIndex = 2
        } else {
          this.$refs.nav.currentIndex = 3
        }
      }
    },
    // 加入购物车
    addToCart() {
      // 获取加入购物车需要的商品信息
      const product = {}
      product.iid = this.iid
      product.name = this.goods.title
      product.image = this.topImage[0]
      product.price = this.goods.realPrice
      product.desc = this.goods.desc
      product.isChecked = true
      product.count = 0

      // 将商品添加到购物车
      this.$store.commit('addCart', product)
    }
  }
};
</script>

<style scoped>
.detailOuter {
  position: relative;
  z-index: 10000;
  background-color: #ffffff;
  height: 100vh;
}

.betterScroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

.tabBar {
  z-index: 10001;
  position: relative;
}

.backtop {
  position: fixed;
  bottom: 55px;
  right: 15px;
}
</style>