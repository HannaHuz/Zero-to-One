<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="box-wrap">
        <div class="box">
          <div class="box-item" v-for="(slider,index) in slides">
            <h3>{{ slider.title }} <br> <small> {{ slider.subtitle }} </small></h3>
            <img :src="require(`@/assets/img/expirience/exp-${index + 1}.png`)">
            <div class="anim" v-if="index===10">
              <img :src="require(`@/assets/img/expirience/exp-${index + 1}.png`)">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999616 64.076V0.999512H63.8838" stroke="url(#paint0_radial_1229_4331)" stroke-width="2" /><path d="M71.7686 8.69165H8.69207V40.2299V71.7681" stroke="url(#paint1_radial_1229_4331)" stroke-width="2" /><defs><radialGradient id="paint0_radial_1229_4331" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.999616 0.999503) rotate(45) scale(40.5224 59.0536)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#332F2D" /></radialGradient><radialGradient id="paint1_radial_1229_4331" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.69207 8.69164) rotate(44.9125) scale(40.5844 59.1437)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#332F2D" /></radialGradient></defs></svg>
            </div>
            <div class="line"></div>
            <p>{{ slider.text }}</p>
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
      winWidth: null,
      slides: [{
          title: '2008-2010',
          text: 'James started running ads for his call centers via tv, radio, and direct mail. In 2010 he turned to digital ads by starting large scale Google Adwords campaigns.'
        },
        {
          title: '2012',
          text: 'James started running ads on Facebook 2 weeks after ads in mobile news feed went live (with sub 5 dollars CPMS and no pixels for optimization)'
        },
        {
          title: '2016',
          text: 'James started a media buying company in Israel where they spent tens of millions of dollars on native and Facebook ads running to advertorials.'
        },
        {
          title: '2017',
          text: 'Nick wrote his first ad and launched the first branded fidget spinner'
        },
        {
          title: '2017',
          text: 'Brandon took over at an Agora division where he began scaling up their acquisition by combining great advertorial copy with meticulous media buying.'
        },
        {
          title: '2018',
          text: 'Nick began writing ad copy for some of the hottest drop shipping products that made millions'
        },
        {
          title: '2019',
          text: 'Nick and James, after both having extreme success in the DTC and Ecommerce space, partner together on an educational event business that focuses on high volume ecommerce brands.'
        },
        {
          title: '2020',
          text: 'James, and Brandon realized the combined power of their skills and began dominating ecommerce and lead generation businesses together by focusing on video creatives, ad copy and advertorials. '
        },
        {
          title: '2021',
          text: 'As Nick scaled his agency he had to fully embrace landing pages and persuasive copy and realized that James and Brandon already had the necessary copywriting experience and the large team of writers.'
        },
        {
          title: '2021',
          text: 'Nick, as well as James & Brandon realized that the more advertorials they tested and the more copywriters they had on a project the better chance of success, so they decided to start building a dedicated copy team together to support their own clients and brands.'
        },
        {
          title: '2022',
          subtitle: 'until now',
          text: 'After much success with their own projects and clients, they decide to offer their copy agency to the public as 021. '
        }
      ]
    }
  },
  methods: {
    media() {
      this.winWidth = window.innerWidth
    },
    boxAnimations() {
      const boxItems = document.querySelectorAll('.box-item'),
        box = document.querySelector('.box')

      boxItems.forEach((item, index) => {
        setTimeout(() => {
          if (index !== 0) {
            box.style.transform = `translateX(-${item.offsetLeft}px)`
          } else {
            box.style.transform = `translateX(0)`
          }
          if (index === boxItems.length - 1) setTimeout(() => this.boxAnimations(), 5000);
        }, index * 5000);
      })
    }
  },
  mounted() {
    this.media()
    window.onresize = () => this.media()
    this.boxAnimations()
  }
}

</script>
<style lang="scss" scoped>
.experience {
  padding: 90px 0 45px;
  background: #332F2D;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  .container {
    @media (max-width: 992px) {
      padding: 0 15px 0 67px;
    }
  }
  .box {
    position: relative;
    &:before {
      @media(max-width: 991.9px) {
        content: "";
        height: 64px;
        width: 36px;
        display: block;
        position: absolute;
        top: 0;
        left: -33px;
        transform: translate(-50%, -100%);
        background: url('@/assets/img/home/exp-arrow.png') no-repeat 0 0/100% 100%;
      }
    }
  }
  .box-item {
    position: relative;
    @media (max-width: 992px) {
      &:last-child {
        p {
          padding-bottom: 0;
        }
        .line {
          background: linear-gradient(202deg, #706C68, transparent);
        }
      }
    }
    &:last-child {
      img {
        display: none;
      }
      .anim {
        padding: 20px 0 0 20px;
        position: relative;
        img {
          width: 184px;
          display: block;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          path {
            opacity: 0;
            &:nth-child(1),
            &:nth-child(2) {
              transform: translate(10px, 10px);
              @media(min-width: 992px) {
                transform: translate(20px, 20px);
              }
              animation: 2s ease-in-out svgPath infinite;
            }
          }
        }
        @keyframes svgPath {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(0%, 0%);
            opacity: 0;
          }
        }
      }
    }
  }
  img {
    width: 131px;
    margin-bottom: 15px;
  }
  h3 {
    font-family: 'Queens Condensed';
    font-size: 72px;
    font-weight: 500;
    line-height: 1;
    color: #DDD9D2;
    margin-bottom: 15px;
    position: relative;
    z-index: 3;
    small {
      font-size: 50px;
    }
    @media (min-width: 768px) {
      br {
        display: none;
      }
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-size: 15px;
    font-weight: 350;
    line-height: 1.5;
    color: #ADACAB;
    padding-bottom: 50px;
  }
  .line {
    position: absolute;
    left: -34px;
    width: 1.5px;
    height: 100%;
    background: #706C68;
    top: 0;
    &:last-child {
      height: 20%;
    }
    &:before {
      content: "";
      border-radius: 50%;
      background: #332F2D;
      border: 2px solid #514D4A;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, 100%);
    }
  }
}
</style>
