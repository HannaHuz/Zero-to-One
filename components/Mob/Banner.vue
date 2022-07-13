<template>
  <section id="banner" class="banner">
    <div class="container">
      <hgroup class="title">
        <div class="title-logo"><img src="@/assets/img/home/banner-img.png"></div>
        <div class="title-h1">We Write.</div>
        <div class="title-h1">People Buy.</div>
        <div class="title-h3">021 means creating something from nothing.We generate sales, not content.</div>
      </hgroup>
      <svg @click.prevent="goTo('solutions')" class="banner-arrow" width="82" height="127" viewBox="0 0 82 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.5 0.999995C40.5 0.723852 40.7239 0.499995 41 0.499995C41.2761 0.499995 41.5 0.723852 41.5 0.999995L40.5 0.999995ZM0.999996 84.9127C0.723854 84.9127 0.499996 84.6889 0.499996 84.4127C0.499996 84.1366 0.723854 83.9127 0.999996 83.9127L0.999996 84.9127ZM81 83.9127C81.2761 83.9127 81.5 84.1366 81.5 84.4127C81.5 84.6889 81.2761 84.9127 81 84.9127L81 83.9127ZM41.5 0.999995L41.5 127L40.5 127L40.5 0.999995L41.5 0.999995ZM40.5 127C40.5 120.483 37.8056 109.937 31.501 101.029C25.2098 92.1398 15.3496 84.9127 0.999996 84.9127L0.999996 83.9127C15.7413 83.9127 25.8811 91.3574 32.3172 100.451C38.7398 109.526 41.5 120.273 41.5 127L40.5 127ZM40.5 127C40.5 120.273 43.2602 109.526 49.6828 100.451C56.1189 91.3574 66.2587 83.9127 81 83.9127L81 84.9127C66.6504 84.9127 56.7902 92.1398 50.499 101.029C44.1944 109.937 41.5 120.483 41.5 127L40.5 127Z" fill="#706C68" /></svg>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goTo(section) {
      document.getElementById(section).scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  background: radial-gradient(175.04% 93.5% at 50% 0%, #F7F116 0%, #EBE66B 45.14%, #DDD9D2 100%);
  position: relative;
  overflow: hidden;
  .container {
    position: relative;
    padding-top: 50px;
    @media(min-width: 768px) {
      padding-top: 100px;
      padding-bottom: 110px;
    }
  }
  &-wrap {
    position: relative;
  }
  &-arrow {
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    z-index: 12;
    @media (min-width: 768px) {
      width: auto;
      position: absolute;
      bottom: 96px;
      right: 0;
      transition: .5s ease;
      &:hover {
        bottom: 80px;
      }
    }
    @media (min-width: 768px) {
      right: 10%;
    }
  }
}
.title {
  margin-bottom: 60px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
  &-logo {
    width: 217px;
    margin-bottom: 40px;
    img {
      display: block;
      width: 100%;
      @media(max-width: 576px) {
        width: 150px;
      }
    }
  }
  &-h1 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 90px;
    line-height: .9;
    color: #332F2D;
    @media(max-width: 576px) {
      font-size: 78px;
    }
    @media(min-width:768px) {
      display: inline-block;
      font-size: 150px;
      line-height: 1;
    }
  }
  &-h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 52px;
    line-height: .9;
    letter-spacing: 0.03em;
    color: #332F2D;
    margin-top: 16px;
    @media(min-width: 768px) {
      margin-left: 10px;
      margin-top: 0;
      font-size: 46px;
      display: inline-block;
      line-height: 1;
    }
  }
  &-h3 {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #332F2D;
    padding-top: 32px;
    position: relative;
    z-index: 1;
    @media(min-width: 768px) {
      max-width: 547px;
      font-size: 24px;
      padding-top: 56px;
      line-height: 150%;
    }
  }
}
</style>
