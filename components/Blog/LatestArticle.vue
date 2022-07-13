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
    <div class="post-title">{{ articles[postID].title }}</div>
    <div class="post-short">{{ articles[postID].short }}</div>
    <div class="post-footer">
      <div class="post-date">{{ articles[postID].date }}</div>
      <a :href="articles[postID].link">
        Read More
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.44531 7L22.4453 7M22.4453 7C20.5794 7 16.4453 8.5 16.4453 12.5M22.4453 7C20.5794 7 16.4453 5.5 16.4453 1.5" stroke="#332F2D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </a>
    </div>
  </article>
</template>
<script>
export default {
  props: ['postID', 'imgSize'],
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>
<style lang="scss" scoped>
.post {
  border-bottom: 1.5px solid #C5C3BF;
  padding-bottom: 80px;
  position: relative;
  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100%;
  }
  &-date {
    font-family: ABC Favorit Extended;
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: #706C68;
  }
  &-title {
    font-family: Queens Condensed;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    text-transform: capitalize;
    color: #332F2D;
    margin-bottom: 12px;
    @media(min-width: 768px) {
      font-size: 32px;
    }
  }
  &-short {
    font-family: ABC Favorit Extended;
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: #706C68;
  }
  &-img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 16px;
    transition: filter 0.3s ease;
  }
  &:hover {
    .post-img {
      filter: grayscale(10%) sepia(100%);
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font-family: ABC Favorit Extended;
    font-weight: 350;
    font-size: 16px;
    line-height: 21px;
    color: #332F2D;
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
</style>
