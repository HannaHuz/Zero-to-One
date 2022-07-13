<template>
  <section class="latest">
    <div class="container">
      <h2 class="title">Latest Articles</h2>
      <div class="latest-wrap">
        <BlogLatestArticle v-for="(article, index) in articles" :key="index" :postID="article" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      articles: [3]
    }
  }
}
</script>
<style lang="scss" scoped>
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
      @media(min-width:768px){
        flex: 1 calc(50% - 40px);
        max-width: calc(50% - 40px) ;
        margin: 20px;
      }
      @media(min-width:992px){
        flex: 1 calc(33.333% - 40px);
        max-width: calc(33.333% - 40px);
      }
    }
  }
}
h2{
  font-family: Queens Condensed;
  font-weight: 500;
  padding-top: 64px;
  border-top: 1.5px solid #332F2D;
}
</style>
