<template>
  <section class="featured">
    <div class="container">
      <h2 class="title">Featured Articles</h2>
      <div class="featured-wrap" v-if="winWidth > 1200">
        <div class="featured-left"><BlogFeaturedArticle :postID="1" imgSize="lg" /></div>
        <div class="featured-right"><BlogFeaturedArticle :postID="2" imgSize="sm" /></div>
      </div>
      <div class="latest-wrap" v-else>
        <BlogLatestArticle :postID="1" />
        <BlogLatestArticle :postID="2" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      winWidth: null
    }
  },
  methods: {
    media(){
      this.winWidth = window.innerWidth
    }
  },
  mounted(){
    this.media()
    window.onresize = () => this.media()
  }
}
</script>
<style lang="scss" scoped>
.featured{
  padding-bottom: 40px;
  &-wrap{
    display: flex;
    justify-content: space-between;
  }
  &-right{
    margin-left: 40px;
  }
  h2{
    font-family: Queens Condensed;
    font-weight: 500;
    padding-top: 40px;
    border-top: 2px solid #332F2D;
    margin-bottom: 30px;
  }
}
.latest{
  padding-bottom: 80px;
  &-wrap{
    padding-top: 16px;
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: -20px;
      margin-right: -20px;
    }
    & > article{
      margin: 20px 0;
      @media (min-width: 768px) {
        flex: 1 calc(50% - 40px);
        max-width: 50%;
        margin: 20px;
      }
      @media(min-width:992px){
        flex: 1 calc(33.333% - 40px);
        margin: 20px;
      }
    }
  }
}
</style>
