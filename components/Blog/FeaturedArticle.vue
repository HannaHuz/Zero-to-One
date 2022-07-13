<template>
  <article class="post" :id="`post-${postID}`">
    <img
      v-if="imgSize"
      class="post-img"
      src="@/assets/img/blog/post-001.jpg"
      :src="require(`@/assets/img/blog/${articles[postID].img[imgSize]}`)"
      >
    <img
      v-else
      class="post-img"
      src="@/assets/img/blog/post-001.jpg"
      :src="require(`@/assets/img/blog/${articles[postID].img.md}`)"
      >
    <div class="post-info">
      <div class="post-date">{{ articles[postID].date }}</div>
      <div class="post-title">{{ articles[postID].title }}</div>
      <div class="post-short" v-if="imgSize == 'sm'">{{ articles[postID].short | snippet }}</div>
      <div class="post-short" v-else>{{ articles[postID].short }}</div>
      <a :href="articles[postID].link">
        Read More
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84863 12L22.8486 12M22.8486 12C20.9827 12 16.8486 13.5 16.8486 17.5M22.8486 12C20.9827 12 16.8486 10.5 16.8486 6.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </a>
    </div>
  </article>
</template>
<script>
export default {
  props: ['postID', 'imgSize'],
  filters: {
    snippet: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.slice(0, 55) + '...';
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>
<style lang="scss" scoped>
.post {
  position: relative;
  &-info {
    @media(min-width: 768px) {
      position: absolute;
      z-index: 2;
      top: 32px;
      left: 24px;
      height: calc(100% - 32px - 16px);
      max-width: 415px;
    }
  }
  &-date {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: #706C68;
    @media(min-width: 768px) {
      font-size: 12px;
      line-height: 16px;
      color: #DDD9D2;
    }
  }
  &-title {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    text-transform: capitalize;
    color: #332F2D;
    margin: 8px 0px;
    @media(min-width: 768px) {
      font-size: 28px;
      line-height: 41px;
      color: #DDD9D2;
      margin: 12px 0px;
    }
    @media(min-width: 1400px) {
      font-size: 32px;
    }
  }
  &-short {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: #706C68;
    margin: 8px 0px;
    @media(min-width: 768px) {
      font-size: 16px;
      line-height: 21px;
      color: #DDD9D2;
      margin: 12px 10px 12px 0;
    }
  }
  &-img {
    display: block;
    width: 100%;
    height: auto;
    transition: filter .5s ease;
  }
  &:hover {
    .post-img {
      filter: grayscale(10%) sepia(100%);
    }
  }
  a {
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 16px;
    line-height: 21px;
    color: #DDD9D2;
    @media(min-width: 768px) {
      position: absolute;
      bottom: 0;
    }
    svg {
      display: inline-block;
      vertical-align: middle;
      transition: .5s ease;
    }
    &:hover {
      svg {
        transform: translate(10px, 0);
      }
    }
  }
}
.blog {
  .post {
    &-info {
      @media(min-width: 2000px) {
        max-width: 30vw;
      }
    }
    &-date {
      @media(min-width: 2000px) {
        font-size: 1vw;
      }
    }
    &-title {
      @media(min-width: 2000px) {
        font-size: 2vw;
        margin: 1vw 0;
        line-height: 1.5;
      }
    }
    &-short {
      @media(min-width: 2000px) {
        font-size: 1.1vw;
        line-height: 1.2;
      }
    }
    a {
      @media(min-width: 2000px) {
        font-size: 1.1vw;
        svg {
          height: auto;
          width: 2vw;
        }
      }
    }
  }
}

</style>
