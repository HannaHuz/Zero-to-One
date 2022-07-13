<template>
  <div class="page page-blog">
    <BlogHeader/>
    <BlogFeatured/>
    <BlogLatest/>
    <BlogSubscribe/>
  </div>
</template>
<script>
export default {
  layout: 'blog'
}
</script>
<style lang="scss">
.page-blog {
  padding: 30px 0 0;
  @media(min-width: 768px) {
    padding: 60px 0 0;
  }

  .title {
    font-family: 'Queens Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 52px;
    line-height: 90%;
    color: #332F2D;
  }
}
</style>
