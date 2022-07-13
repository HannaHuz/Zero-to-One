<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="testimonials-title">
        <svg width="80" height="89" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.6275 -0.00012207L50.2826 -0.000120254C50.2826 14.2648 61.7509 25.8318 75.9629 25.8008V45.6787H59.4406C70.822 45.7801 80 55.0752 80 66.5481V88.9998H21.3334C9.52607 88.8758 0 79.2005 0 67.3233C0 55.4694 9.48899 45.8395 21.2644 45.6787H3.9783L3.9783 25.8008C18.1286 25.8008 29.6275 14.2648 29.6275 -0.00012207Z" fill="url(#paint0_radial_1710_11)" /><defs><radialGradient id="paint0_radial_1710_11" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 -0.00012201) rotate(90) scale(72.8201 95.6818)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#DDD9D2" /></radialGradient></defs></svg>
        <h2>Testimonials</h2>
      </div>
      <div class="testimonials-row" v-for="post in posts">
        <div class="testimonials-text">
          <p>{{ post.text }}</p>
        </div>
        <div class="testimonials-author">
          <div class="testimonials-author-img"><img :src="post.img"></div>
          <div class="testimonials-author-desc">
            <h4>{{ post.author }}</h4>
            <h5>{{ post.position }}</h5>
            <h6><span><b>—</b></span> {{ post.company }}</h6>
          </div>
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
          text: `I can’t recommend the 021 team enough. They helped scale us up to almost $100k/day in a matter of months. I’ve met very few agencies that are as committed as they are.`,
          img: require('~/assets/img/home/testi-img-1.png'),
          author: `Chris Carroll`,
          position: `Publisher`,
          company: `Paradigm Press (A Division of Agora)`
        },
        {
          text: `The 021 team has written countless advertorials for us. Just on one offer we worked together on, their advertorial’s were able to scale us from 2k in spend a day to over 30k profitably! On another offer they were able to almost match our control on their very first try.`,
          img: require('@/assets/img/home/testi-img-2.png'),
          author: `Brandon Monaghan`,
          position: `Founder`,
          company: `Javvy & Shine`
        },
        {
          text: `I’ve hired all kinds of writers. In-house as well as writers from high-level copywriting masterminds. None were able to come close to the quality of ideas that the 021 team does. I’ve never worked with a group more dedicated to winning for their clients than 021.`,
          img: require('@/assets/img/home/testi-img-3.png'),
          author: `Vahe Haroutounian`,
          position: `Founder`,
          company: `Blissy`
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.testimonials {
  padding: 72px 0 40px;
  position: relative;
  overflow: hidden;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  &-title {
    position: relative;
    svg {
      position: absolute;
      top: -20px;
      left: 0;
      z-index: 1;
      width: 54px;
      height: 60px;
      @media(min-width: 768px) {
        left: -20px;
        width: 80px;
        height: 89px;
      }
    }
    h2 {
      font-family: 'Queens Condensed';
      font-weight: 500;
      font-size: 52px;
      line-height: 1;
      color: #332F2D;
      margin-bottom: 23px;
      position: relative;
      z-index: 2;
      margin-left: 16px;
      @media (min-width: 768px) {
        font-size: 90px;
        margin-bottom: 43px;
      }
    }
  }
  &-text {
    @media(min-width: 768px) {
      flex-basis: 45%;
      max-width: 45%;
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 16px;
    line-height: 1.5;
    color: #332F2D;
    margin: 0 0 30px;
    position: relative;
    text-align: left;
    &:before {
      content: url("assets/img/home/quotes.png");
      margin-right: 10px;
      position: absolute;
      left: -13%;
      @media (min-width: 768px) {
        left: -10%;
      }
    }
    @media (min-width: 768px) {
      margin: 0;
    }
  }
  h4 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 22px;
    line-height: 1;
    text-align: left;
    margin-bottom: 8px;
    color: #332F2D;
    @media (max-width: 374.9px) {
      font-size: 15px;
    }
    @media(min-width: 768px) {
      font-size: 23px;
      margin-bottom: 4px;
    }
  }
  h5 {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #706C68;
    @media (max-width: 374.9px) {
      font-size: 10px;
    }
  }
  h6 {
    font-family: 'Queens Condensed';
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    position: relative;
    text-transform: capitalize;
    color: #332F2D;
    @media (max-width: 374.9px) {
      font-size: 10px;
    }
    @media (min-width: 768px) {
      font-size: 14px;
      letter-spacing: 0.04em;
    }
    span {
      color: #FF7403;
      font-size: 18px;
    }
    svg {
      margin-left: 6px;
    }
  }
  &-row {
    padding: 30px 0 30px 40px;
    border-bottom: 1.5px solid #C5C3BF;
    @media (min-width: 768px) {
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-author {
    display: flex;
    align-items: center;
    text-align: left;
    @media (min-width: 768px) {
      flex-basis: 45%;
      max-width: 45%;
    }
  }
  &-author-img {
    margin-right: 26px;
    img {
      width: 104px;
    }
  }
}
</style>
