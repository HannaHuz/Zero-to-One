<template>
  <section id="banner" class="banner" >
    <div class="container">
      <hgroup class="title">
        <div class="title-h1 anim">
          <i>W</i>
          <i>e</i>
          <i>&nbsp;</i>
          <i>W</i>
          <i>r</i>
          <i>i</i>
          <i>t</i>
          <i>e</i>
          <i>.</i>
        </div>
        <div class="title-h1 anim">
          <i>P</i>
          <i>e</i>
          <i>o</i>
          <i>p</i>
          <i>l</i>
          <i>e</i>
          <i>&nbsp;</i>
          <i>B</i>
          <i>u</i>
          <i>y</i>
          <i>.</i>
        </div>
        <div class="title-h3 anim">
          <i>021 means creating something from nothing. <br> We generate sales, not content.</i>
        </div>
      </hgroup>
      <svg @click="moveTo(1)" class="banner-arrow" width="82" height="111" viewBox="0 0 82 111" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 1C40 0.447717 40.4477 1.74347e-06 41 1.74846e-06C41.5523 1.75344e-06 42 0.447717 42 1L40 1ZM0.999997 69.4127C0.447712 69.4127 -2.97085e-06 68.965 -2.9467e-06 68.4127C-2.92256e-06 67.8605 0.447712 67.4127 0.999997 67.4127L0.999997 69.4127ZM81 67.4127C81.5523 67.4127 82 67.8605 82 68.4127C82 68.965 81.5523 69.4127 81 69.4127L81 67.4127ZM42 1L42 111L40 111L40 1L42 1ZM40 111C40 104.588 37.3385 94.1423 31.0928 85.3176C24.8741 76.531 15.1537 69.4127 0.999997 69.4127L0.999997 67.4127C15.9372 67.4127 26.2168 74.9662 32.7253 84.1622C39.207 93.3202 42 104.168 42 111L40 111ZM40 111C40 104.168 42.7931 93.3202 49.2747 84.1622C55.7832 74.9662 66.0628 67.4127 81 67.4127L81 69.4127C66.8463 69.4127 57.1259 76.531 50.9072 85.3176C44.6615 94.1423 42 104.588 42 111L40 111Z" fill="#ADACAB"/></svg>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    moveTo(num) {
      this.$parent.$refs.pages.$fullpage.moveTo(num, 'slide1');
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$el.classList.add('active')
    }, 0);
  }
}
</script>
<style lang="scss" scoped>
.banner {
  background: radial-gradient(175.04% 93.5% at 50% 0%, #F7F116 0%, #EBE66B 45.14%, #DDD9D2 100%);
  .container {
    position: relative;
  }
  &-wrap {
    position: relative;
  }
  &-arrow {
    margin: 0 auto;
    cursor: pointer;
    z-index: 12;
    width: auto;
    position: absolute;
    bottom: 0;
    right: 112px;
    transform: translate(0, 50%);
    transition: 1s ease 1.5s;
    opacity: 0;
    &:hover {
      transform: translate(0, -10px)!important;
    }
    @media(min-width: 2000px) {
      right: 15%;
      width: 5vw;
      height: auto;
      bottom: 0;
      transform: translate(0, 50%);
    }
  }
  .anim{
    overflow: hidden;
    display: flex;
    i{
      display: inline-block;
      transform: translate(0, -120%);
      transition: 1s ease 1s;
    }
  }
  @for $i from 1 through 10 {
    $index: $i / 10;
    .anim i:nth-child(#{$i}) {
      transition-delay: #{$index}s;
    }
  }
  &.active{
    .anim{
      i{
        transform: translate(0, 0)
      }
    }
    .title-h3{
      &:before{
        opacity: 1;
      }
    }
    .banner-arrow {
      opacity: 1;
    }
  }
}
.title {
  position: relative;
  &-logo {
    width: 217px;
    margin-bottom: 40px;
    @media(min-width: 1200px) {
      display: inline-block;
      margin-bottom: 0;
      width: 281px;
      margin-right: 50px;
    }
    @media(min-width: 2000px) {
      width: 14vw;
    }
    img {
      display: block;
      width: 100%;
    }
  }
  &-h1 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    color: #332F2D;
    display: inline-block;
    font-size: 150px;
    line-height: 1;
    position: relative;
    z-index: 2;
    @media(min-width: 1440px) {
      font-size: 200px;
    }
    @media(min-width: 2000px) {
      font-size: 10.5vw;
    }
  }
  &-h3 {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    letter-spacing: -0.01em;
    color: #332F2D;
    position: relative;
    z-index: 2;
    font-size: 24px;
    padding-top: 10px;
    line-height: 150%;
    @media(min-width: 2000px) {
      font-size: 1.1vw;
    }
  }
}
</style>
