<template>
  <section id="approach" class="approach">
    <div class="container">
      <div class="approach-title">
        <svg class="animated del-40" data-anim="fadeInUp" width="62" height="79" viewBox="0 0 62 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.0071 62.4366C49.5944 62.4366 40.2449 53.7455 39.3308 42.7076C51.8665 39.9997 61.0071 31.6696 61.0071 21.818C61.0071 9.77426 47.3484 0 30.5036 0C13.6587 0 0 9.77426 0 21.818C0 31.6696 9.14066 39.9997 21.6503 42.7076C20.7623 53.7455 11.4127 62.4366 0 62.4366V78.9677H60.981V62.4366H61.0071Z" fill="url(#paint0_radial_1708_284)" /><defs><radialGradient id="paint0_radial_1708_284" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5036) rotate(90) scale(78.9677 104.089)"><stop stop-color="#F43155" /><stop offset="0.364583" stop-color="#F43155" /><stop offset="0.952271" stop-color="#332F2D" /></radialGradient></defs></svg>
        <h2 class="animated del-10" data-anim="fadeInUp">Our Approach</h2>
      </div>
      <div class="approach-row">
        <div class="approach-col animated" data-anim="fadeInLeft" v-for="(post,index) in posts" :class="`del-${index*30}`">
          <div class="approach-num">{{ post.num }}</div>
          <h6 class="animated del-30" data-anim="fadeInUp">{{ post.title }}</h6>
          <p class="animated del-30" data-anim="fadeInUp">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      posts: [{
          num: '50+',
          title: 'Years Copywriting',
          description: 'Total combined years of copywriting experience.'
        },
        {
          num: '3+',
          title: 'Writers Devoted To You',
          description: 'The minimum number of writers working directly on your project.'
        },
        {
          num: '$93,000,000',
          title: 'Ad Spend On Our Copy',
          description: 'The total amount of ad spend spent on our copy.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.approach {
  z-index: 1;
  background: #332F2D;
  &-row {
    display: flex;
    justify-content: space-between;
  }
  &-col {
    margin-bottom: 0;
    padding: 0 10px;
    flex-basis: 33%;
    max-width: 33%;
    .approach-num {
      transition: .5s ease;
      transform-origin: center bottom;
    }
    &:hover {
      .approach-num {
        transform: scale(.9)
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-title {
    position: relative;
    svg {
      position: absolute;
      top: -25px;
      left: 10px;
      z-index: -1;
      @media(min-width: 2000px) {
        width: 4vw;
        height: auto;
        left: -20px;
      }
    }
    h2 {
      font-family: 'Queens Condensed';
      font-weight: 500;
      line-height: 1;
      color: #DDD9D2;
      margin-left: 40px;
      font-size: 58px;
      margin-bottom: 91px;
      @media(min-width: 2000px) {
        font-size: 4vw;
        margin-bottom: 6vw;
      }
    }
  }
  h6 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    color: #DDD9D2;
    margin-bottom: 15px;
    font-size: 23px;
    text-align: center;
    @media(min-width: 1200px) {
      font-size: 28px;
    }
    @media(min-width: 2000px) {
      font-size: 2vw;
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 16px;
    line-height: 1.5;
    color: #ADACAB;
    text-align: center;
    @media(min-width: 2000px) {
      font-size: 1.2vw;
    }
  }
  &-num {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 40px;
    line-height: 1.3;
    text-shadow: #F43155 1px 0px,
      #F43155 1px 1px,
      #F43155 0px 1px,
      #F43155 -1px 1px,
      #F43155 -1px 0px,
      #F43155 -1px -1px,
      #F43155 0px -1px,
      #F43155 1px -1px;
    color: #332F2D;
    margin-bottom: 42px;
    text-align: center;
    @media(min-width: 1200px) {
      font-size: 55px;
    }
    @media(min-width: 2000px) {
      font-size: 3.5vw;
    }
  }
}
</style>
