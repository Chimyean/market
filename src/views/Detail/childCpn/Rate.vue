<template>
  <div>
    <div align="center" class="title">买家评论</div>
    <div v-for="(item, index) in rate" :key="index" class="outer">
      <div class="img">
        <img :src="item.user.avatar" alt />
      </div>
      <div class="content">
        <div>{{item.user.uname}}</div>
        <div>{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: {
    rate: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
 .outer {
   display: flex;
 }

 .img {
   width: 20%;
   padding-left: 15px;
   padding-top: 10px;
 }

 .img > img {
   width: 50px;
 }

 .content {
   width: 80%;
   display: flex;
   flex-direction: column;
 }

 .content > div:nth-child(1) {
   padding: 10px;
   font-size: 14px;
   font-weight: bold;
 }

 .content > div:nth-child(2) {
   padding-left: 10px;
   padding-right: 10px;
   font-size: 12px;
   line-height: 14px;
 }

 .title {
   font-size: 14px;
   font-weight: bold;
   padding: 10px 0px;
 }
</style>