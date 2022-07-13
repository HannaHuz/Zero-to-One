<template>
  <section>
    <div class="container">
      <h2>You may also like</h2>
      <div class="latest-wrap">
        <BlogLatestArticle v-for="(post, index) in posts" :postID="post" :key="index" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['posts']
}

</script>
<style lang="scss" scoped>
section {
  padding: 60px 0 40px;
  @media (min-width: 768px) {
    padding: 40px 0 60px;
  }
  @media (min-width: 1200px) {
    padding: 54px 0 120px;
  }
  h2 {
    font-family: 'Queens Condensed';
    font-size: 52px;
    font-weight: 500;
    line-height: 1;
    color: #332F2D;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      font-size: 58px;
      font-weight: 500;
      margin-bottom: 21px;
    }
  }
}
.latest {
  padding-bottom: 80px;
  &-wrap {
    @media(min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      margin-left: -20px;
      margin-right: -20px;
    }
    &>article {
      margin: 20px 0;
      @media(min-width: 768px) {
        flex: 1 calc(50% - 40px);
        max-width: calc(50% - 40px);
        margin: 20px;
      }
      @media(min-width:1200px) {
        flex: 1 calc(33.333% - 40px);
        max-width: calc(33.333% - 40px);
        margin: 0 20px;
      }
    }
  }
}

</style>
