<template>
  <article>
    <section class="article-banner">
      <div class="container">
        <small>{{ date }}</small>
        <h1 v-html="title"></h1>
        <div class="description" v-html="description"></div>
        <img v-if="winWidth > 576" :src="require(`@/assets/img/blog/${articles[postId].img.long}`)">
        <img v-else :src="require(`@/assets/img/blog/${articles[postId].img.md}`)">
      </div>
    </section>
    <section class="article-content">
      <div class="container">
        <slot></slot>
        <ArticleSocials />
      </div>
    </section>
  </article>
</template>
<script>
export default {
  props: ['date', 'title', 'description', 'image', 'postId'],
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
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>
<style lang="scss">
h1 {
  br {
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
.article {
  &-banner {
    small {
      display: inline-block;
      font-family: 'ABC Favorit Extended';
      font-size: 15px;
      font-weight: 350;
      line-height: 21px;
      margin-bottom: 16px;
      color: #706C68;
      @media (min-width: 768px) {
        margin-bottom: 12px;
      }
    }
    h1 {
      font-family: 'Queens Condensed';
      font-size: 52px;
      font-weight: 500;
      line-height: 46.8px;
      margin-bottom: 30px;
      color: #332F2D;
      @media (min-width: 992px) {
        font-size: 58px;
        margin-bottom: 24px;
        line-height: 70px;
        width: 840px
      }
    }
    .description {
      font-family: 'ABC Favorit Extended';
      font-size: 16px;
      font-weight: 350;
      line-height: 25.2px;
      margin-bottom: 30px;
      color: #332F2D;
      @media (min-width: 992px) {
        width: 840px;
        margin-bottom: 64px;
        font-size: 18px;
      }
    }
    img {
      width: 100%;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        margin-bottom: 68px;
      }
    }
  }
  &-content {
    @media (min-width: 1200px) {
      padding-bottom: 36px;
    }
    .container {
      position: relative;
      max-width: 730px;
      margin: 0 auto;
      @media (min-width: 768px) {
        padding: 0;
      }
    }
    h3 {
      font-family: 'Queens Condensed';
      font-size: 40px;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 24px;
      color: #332F2D;
      margin-top: 30px;
      @media (min-width: 768px) {
        font-family: 'Queens Condensed';
        font-size: 32px;
        margin-top: 64px;
        font-weight: 500;
      }
    }
    p {
      color: #332F2D;
      font-family: 'ABC Favorit Extended';
      font-size: 18px;
      font-weight: 350;
      margin-bottom: 30px;
      line-height: 25.2px;
    }
    a {
      color: #F43155;
      text-decoration: underline;
      transition: 0.3s ease-in;
      &:hover {
        text-decoration: none;
      }
    }
    ul {
      margin-bottom: 24px;
      @media (min-width: 768px) {
        margin-left: 30px;
      }
      li {
        list-style: inside;
        color: #332F2D;
        font-family: 'ABC Favorit Extended';
        font-size: 16px;
        font-weight: 350;
        margin-bottom: 30px;
        line-height: 25.2px;
        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
    }
    img {
      margin-bottom: 12px;
    }
    small {
      display: inline-block;
      font-family: 'ABC Favorit Extended';
      font-size: 14px;
      font-weight: 350;
      line-height: 1;
      color: #706C68;
      margin-bottom: 32px;
      @media (min-width: 768px) {
        margin-bottom: 27px;
      }
    }
    .socials {
      @media(max-width: 991.9px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media(min-width: 992px) {
        position: absolute;
        top: 0;
        left: -11%;
      }
    }
  }
}
</style>
