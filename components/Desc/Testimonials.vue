<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="testimonials-title">
        <svg class="animated del-40" data-anim="fadeInUp" width="80" height="89" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.6275 -0.00012207L50.2826 -0.000120254C50.2826 14.2648 61.7509 25.8318 75.9629 25.8008V45.6787H59.4406C70.822 45.7801 80 55.0752 80 66.5481V88.9998H21.3334C9.52607 88.8758 0 79.2005 0 67.3233C0 55.4694 9.48899 45.8395 21.2644 45.6787H3.9783L3.9783 25.8008C18.1286 25.8008 29.6275 14.2648 29.6275 -0.00012207Z" fill="url(#paint0_radial_1710_11)" /><defs><radialGradient id="paint0_radial_1710_11" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 -0.00012201) rotate(90) scale(72.8201 95.6818)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#DDD9D2" /></radialGradient></defs></svg>
        <h2 class="animated del-10" data-anim="fadeInUp">Testimonials</h2>
      </div>
      <div class="testimonials-row animated" data-anim="fadeInUp" v-for="(post,index) in posts" :class="`del-${index*50}`">
        <div class="testimonials-text">
          <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.98 0L11.34 0.81C9.54 1.71 8.1 2.85 7.02 4.23001C5.94 5.61001 5.4 6.96 5.4 8.28C5.4 8.82 5.52 9.21 5.76 9.45C6.06 9.69 6.57 9.87 7.29 9.99C10.71 10.65 12.42 12.48 12.42 15.48C12.42 17.04 11.88 18.36 10.8 19.44C9.72 20.46 8.34 20.97 6.66 20.97C4.68 20.97 3.06 20.31 1.8 18.99C0.6 17.61 0 15.81 0 13.59C0 11.61 0.45 9.72 1.35 7.92C2.31 6.12 3.6 4.53 5.22 3.15C6.9 1.71 8.82 0.660002 10.98 0ZM26.28 0L26.64 0.81C24.84 1.71 23.4 2.85 22.32 4.23001C21.24 5.61001 20.7 6.96 20.7 8.28C20.7 8.82 20.82 9.21 21.06 9.45C21.36 9.69 21.87 9.87 22.59 9.99C26.01 10.65 27.72 12.48 27.72 15.48C27.72 17.04 27.18 18.36 26.1 19.44C25.02 20.46 23.64 20.97 21.96 20.97C19.98 20.97 18.36 20.31 17.1 18.99C15.9 17.61 15.3 15.81 15.3 13.59C15.3 11.61 15.75 9.72 16.65 7.92C17.61 6.12 18.9 4.53 20.52 3.15C22.2 1.71 24.12 0.660002 26.28 0Z" fill="url(#paint0_radial_1425_2757)" /><defs><radialGradient id="paint0_radial_1425_2757" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.86) rotate(90.5725) scale(20.001 38.6478)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#DDD9D2" /></radialGradient></defs></svg>
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
  &-title {
    position: relative;
    svg {
      z-index: -1;
      position: absolute;
      top: -20px;
      left: -20px;
      @media(min-width: 2000px) {
        width: 4vw;
        height: auto;
      }
    }
    h2 {
      font-family: 'Queens Condensed', sans-serif;
      font-weight: 500;
      line-height: 1;
      color: #332F2D;
      margin-left: 16px;
      font-size: 90px;
      margin-bottom: 43px;
      @media(min-width: 2000px) {
        font-size: 6vw;
      }
    }
  }
  &-text {
    position: relative;
    flex-basis: 45%;
    max-width: 45%;
    svg {
      position: absolute;
      left: 0;
      transform: translate(-40px, 0);
      @media (min-width: 2000px) {
        width: 1.5vw;
        height: auto;
        left: -1vw;
      }
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 16px;
    line-height: 1.5;
    color: #332F2D;
    position: relative;
    text-align: left;
    margin: 0;
    @media(min-width: 2000px) {
      font-size: 1.1vw;
    }
  }
  h4 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: #332F2D;
    font-size: 23px;
    margin-bottom: 4px;
    @media(min-width: 1200px) {
      font-size: 28px;
    }
    @media(min-width: 2000px) {
      font-size: 1.5vw;
      margin-bottom: 0.5vw;
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
    @media(min-width: 2000px) {
      font-size: 1vw;
      margin-bottom: 0.5vw;
    }
  }
  h6 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    position: relative;
    text-transform: capitalize;
    color: #332F2D;
    font-size: 14px;
    letter-spacing: 0.04em;
    @media(min-width: 2000px) {
      font-size: 1vw;
    }
    span {
      color: #FF7403;
      font-size: 18px;
    }
    svg {
      margin-left: 6px;
      @media(min-width: 2000px) {
        width: 1vw;
        height: 1vw;
      }
    }
  }
  &-row {
    padding: 30px 0 30px 40px;
    border-bottom: 1.5px solid #C5C3BF;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-author {
    display: flex;
    align-items: center;
    text-align: left;
    flex-basis: 45%;
    max-width: 45%;
    @media(min-width: 1200px) {
      flex-basis: 35%;
      max-width: 35%;
    }
  }
  &-author-img {
    margin-right: 26px;
    @media(min-width: 2000px) {
      margin-right: 2vw;
    }
    img {
      width: 104px;
      @media(min-width: 2000px) {
        width: 6.5vw;
      }
    }
  }
}
</style>
