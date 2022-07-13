<template>
  <section id="blog" class="blog">
    <div class="container">
      <h2 class="animated" data-anim="fadeInUp">Blog</h2>
      <div class="featured-wrap animated" data-anim="fadeInUp" v-if="winWidth > 1200">
        <div class="featured-left">
          <BlogFeaturedArticle :postID="1" imgSize="lg" />
        </div>
        <div class="featured-right">
          <BlogFeaturedArticle :postID="2" imgSize="sm" />
        </div>
      </div>
      <div class="latest-wrap animated" data-anim="fadeInUp" v-else>
        <BlogLatestArticle :postID="1" />
        <BlogLatestArticle :postID="2" />
      </div>
      <a href="/blog" class="animated" data-anim="fadeInUp">
        See all articles
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#332F2D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      winWidth: null
    }
  },
  methods: {
    media() {
      this.winWidth = window.innerWidth
    }
  },
  mounted() {
    this.media()
    window.onresize = () => this.media()
  }
}
</script>
<style lang="scss" scoped>
.latest {
  padding-bottom: 80px;
  &-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -20px;
    margin-right: -20px;
    &>article {
      flex: 1 calc(33.333% - 40px);
      margin: 20px;
    }
  }
}
.blog {
  a {
    text-decoration: none;
    text-align: center;
    display: block;
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    text-transform: capitalize;
    color: #332F2D;
    position: absolute;
    right: 5%;
    top: 10%;
    transform: translate(0, -50%);
    z-index: 8;
    @media(min-width: 2000px) {
      font-size: 2vw;
      top: 10%;
      right: 0;
    }
    svg {
      transition: .5s ease;
      @media(min-width: 2000px) {
        width: 2vw;
        height: auto;
      }
    }
    &:hover {
      svg {
        transform: translate(10px, 0);
      }
    }
  }
  .container {
    position: relative;
  }
  h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    color: #332F2D;
    font-size: 90px;
    margin-bottom: 12px;
    @media(min-width: 2000px) {
      font-size: 6vw;
    }
  }
  .featured {
    height: 559px;
    padding-bottom: 40px;
    &-wrap {
      @media(min-width: 1200px) {
        display: flex;
        justify-content: space-between;
      }
    }
    &-right {
      width: 31%;
      flex: 1 31%;
      margin-left: 3%;
      @media(min-width: 2000px) {
        img {
          min-height: 100%;
        }
      }
    }
    &-left {
      width: 66%;
      flex: 1 66%;
      @media(min-width: 2000px) {
        img {
          min-height: 100%;
        }
      }
    }
    h2 {
      padding-top: 40px;
      border-top: 2px solid #332F2D;
      margin-bottom: 30px;
    }
    .article {
      width: 100%;
    }
  }
}
</style>
