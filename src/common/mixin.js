import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    this.$refs.detailScroll.scroll.on("scroll", position => {
      if (position.y < -1200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  methods: {
    backTop() {
      // console.log('---', this.$refs);
      this.$refs.detailScroll.scroll.scrollTo(0, 0, 500);
    },
  },
}