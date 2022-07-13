<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="slider-outer animated" data-anim="fadeInUp">
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div class="slider-item" v-for="(slide, index) in slider" :class="`slider-item--${index + 1}`">
            <div class="slider-wrap">
              <img class="slider-image animated del-10" data-anim="fadeInUp" :src="require(`@/assets/img/expirience/exp-${index + 1}.png`)">
              <div class="slider-animate" v-if="index===10">
                <img :src="require(`@/assets/img/expirience/exp-${index + 1}.png`)">
                <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 166V2H165.5" stroke="url(#paint0_radial_1229_4331)" stroke-width="4" /><path d="M186 22H22V104V186" stroke="url(#paint1_radial_1229_4331)" stroke-width="4" /><defs><radialGradient id="paint0_radial_1229_4331" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2 1.99998) rotate(45) scale(105.359 153.541)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#332F2D" /></radialGradient><radialGradient id="paint1_radial_1229_4331" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 22) rotate(44.9125) scale(105.52 153.775)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#332F2D" /></radialGradient></defs></svg>
              </div>
              <div class="slider-box">
                <div class="slider-title animated del-30" data-anim="fadeInUp">{{ slide.title }} <small>{{ slide.subtitle }}</small></div>
                <div class="line animated" data-anim="slideInLeft">
                  <svg class="arrow" v-if="index === 0" width="258" height="164" viewBox="0 0 258 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.43373e-05 82L258 82M258 82C230.934 82 170.467 104.364 170.467 164M258 82C230.934 82 170.467 59.6364 170.467 -7.12203e-07" stroke="url(#paint0_linear_2017_2625)" /><defs><linearGradient id="paint0_linear_2017_2625" x1="4" y1="82" x2="258" y2="82" gradientUnits="userSpaceOnUse"><stop stop-color="#514D4A" stop-opacity="0" /><stop offset="1" stop-color="#514D4A" /></linearGradient></defs></svg>
                  <svg v-if="index === 9" width="255" height="276" viewBox="0 0 255 276" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M1.18262 276C1.18262 189.064 27.1308 122.697 69.43 78.0673C111.729 33.4385 170.42 10.5008 236 10.5008L236 9.50075C170.182 9.50075 111.215 32.5267 68.7042 77.3794C26.1942 122.231 0.182624 188.864 0.182624 276L1.18262 276Z" fill="#706C68" /><circle cx="245" cy="10" r="9.25" fill="#332F2D" stroke="#514D4A" stroke-width="1.5" /></svg>
                </div>
                <div class="slider-description animated del-40" data-anim="fadeInUp" v-html="slide.description"></div>
              </div>
            </div>
          </div>
        </vue-tiny-slider>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head() {
    return {
      link: [{
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
      }]
    }
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: false,
        items: 1,
        swipeAngle: 45,
        loop: false,
        controls: true,
        nav: false,
        autoplay: true,
        speed: 1000,
        animateDelay: false,
        autoplayButton: false,
        autoplayButtonOutput: false,
      },
      winWidth: null,
      slider: [{
          title: '2008-2010',
          description: 'James started running ads for his call centers via tv, radio, and direct mail. In 2010 he turned to digital ads by starting large scale Google Adwords campaigns.'
        },
        {
          title: '2012',
          description: 'James started running ads on Facebook 2 weeks after ads in mobile news feed went live (with sub 5 dollars CPMS and no pixels for optimization).'
        },
        {
          title: '2016',
          description: 'James started a media buying company in Israel where they spent tens of millions of dollars on native and Facebook ads running to advertorials. '
        },
        {
          title: '2017',
          description: 'Nick wrote his first ad and launched the first branded <br>fidget spinner'
        },
        {
          title: '2017',
          description: 'Brandon took over at an Agora division where he began scaling up their acquisition by combining great advertorial copy with meticulous media buying.'
        },
        {
          title: '2018',
          description: 'Nick began writing ad copy for some of the hottest drop shipping products that made millions'
        },
        {
          title: '2019',
          description: 'Nick and James, after both having extreme success in the DTC and Ecommerce space, partner together on an educational event business that focuses on high volume ecommerce brands.'
        },
        {
          title: '2020',
          description: 'James, and Brandon realized the combined power of their skills and began dominating ecommerce and lead generation businesses together by focusing on video creatives, ad copy and advertorials.'
        },
        {
          title: '2021',
          description: 'As Nick scaled his agency he had to fully embrace landing pages and persuasive copy and realized that James and Brandon already had the necessary copywriting experience and the large team of writers.'
        },
        {
          title: '2021',
          description: 'Nick, as well as James & Brandon realized that the more advertorials they tested and the more copywriters they had on a project the better chance of success, so they decided to start building a dedicated copy team together to support their own clients and brands.'
        },
        {
          title: '2022',
          subtitle: 'until now',
          description: 'After much success with their own projects and clients, they decide to offer their copy agency to the public as 021.'
        }
      ],
    }
  }
}
</script>
<style lang="scss">
.tns-controls {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(-50%);
  display: flex;
  width: 300px;
  justify-content: space-between;
  z-index: 5;
  border: transparent;
  outline: none;
  @media(min-width: 2000px) {
    width: 12vw;
  }
  &:focus {
    -webkit-appearance: none;
  }
  &:hover {
    -webkit-appearance: none;
  }
  &:active {
    -webkit-appearance: none;
  }
  button {
    width: 110px;
    height: 80px;
    background: none;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    color: transparent;
    transition: 0.3s ease-in;
    @media(min-width: 2000px) {
      width: 5vw;
      height: 3vw;
    }
    &:first-child {
      background: url("@/assets/img/home/arrow-left.png") no-repeat center;
      &:hover {
        transform: translateX(-10px);
      }
      &:active {
        transform: translateX(0px);
      }
    }
    &:last-child {
      background: url("@/assets/img/home/arrow-right.png") no-repeat center;
      &:hover {
        transform: translateX(10px);
      }
      &:active {
        transform: translateX(0px);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.tns-ovh {
  overflow: visible;
}
</style>
<style lang="scss" scoped>
.experience {
  background: #332F2D;
  .container {
    @media (max-width: 992px) {
      padding: 0 15px 0 67px;
    }
    @media(min-width: 992px) {
      position: relative;
      overflow: hidden;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(270deg, #332F2D 0%, rgba(51, 47, 45, 0) 100%);
        z-index: 2;
      }
      &:before {
        left: 0;
        transform: rotate(-180deg);
      }
      &:after {
        right: 0;
      }
    }
  }
  .slider {
    &-outer {
      position: relative;
      padding-bottom: 100px;
      z-index: 4;
      &:after {
        content: "";
        background: linear-gradient(270deg, #332F2D 0%, rgba(51, 47, 45, 0) 100%);
        width: 100px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    &-wrap {
      width: 100%;
    }
    &-image {
      display: block;
      margin-bottom: 30px;
      @media (min-width: 2000px) {
        width: 13vw;
        height: 15vw;
      }
    }
    &-title {
      font-family: 'Queens Condensed';
      font-weight: 500;
      font-size: 90px;
      line-height: 1;
      color: #DDD9D2;
      margin-bottom: 40px;
      @media (min-width: 1200px) {
        font-size: 120px;
      }
      @media (min-width: 2000px) {
        font-size: 8vw;
      }
      small {
        font-size: 28px;
        white-space: nowrap;
        @media (min-width: 1440px) {
          font-size: 48px;
        }
        @media (min-width: 2000px) {
          font-size: 2vw;
        }
      }
    }
    &-description {
      font-family: 'ABC Favorit Extended';
      font-weight: 350;
      font-size: 14px;
      line-height: 150%;
      color: #DDD9D2;
      max-width: 350px;
      @media (min-width: 1200px) {
        max-width: 516px;
      }
      @media (min-width: 2000px) {
        font-size: 1.2vw;
        max-width: 40vw;
      }
    }
    &-item {
      transition: transform 1s ease;
      @media (min-width: 2000px) {
        width: 60vw;
      }
      &.tns-slide-active+.slider-item {
        transform: translateX(-200px);
      }
      &--1 {
        padding-left: 200px;
        width: calc(10.09091%) !important;
        @media (min-width: 1200px) {
          padding-left: 260px;
        }
      }
      &--10 {
        .line {
          width: 58%;
          svg {
            position: absolute;
            top: 0;
            left: 100%;
            transform: translate(0, -100%);
          }
        }
      }
      &--11 {
        padding: 100px 0;
        @media (min-width: 1200px) {
          padding: 0;
        }
        &.tns-slide-active {
          transform: translateX(-100px);
        }
        .slider-wrap {
          align-items: center;
          position: relative;
          display: flex;
          @media (max-width: 1200px) {
            flex-direction: row-reverse;
            justify-content: flex-end;
          }
          .slider-animate {
            position: relative;
            padding-left: 60px;
            padding-top: 60px;
            max-width: 300px;
            @media (min-width: 1200px) {
              max-width: 480px;
              order: 2;
            }
            img {
              @media (min-width: 2000px) {
                max-width: 27vw;
                height: 28vw;
              }
            }
          }
          .slider-box {
            padding-bottom: 10px;
            display: flex;
            flex-direction: column-reverse;
            margin: 0 40px;
            width: 40%;
            position: relative;
            padding-top: 0;
          }
          .slider-image {
            display: none;
          }
          svg {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            path {
              opacity: 0;
              &:nth-child(1),
              &:nth-child(2) {
                transform: translate(26px, 26px);
                @media(min-width: 992px) {
                  transform: translate(40px, 40px);
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
        .slider-title {
          margin-bottom: 0;
        }
        .slider-description {
          margin-bottom: 40px;
        }
        .line {
          display: none;
        }
      }
    }
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
    @media (min-width: 992px) {
      position: relative;
      height: 1px;
      background: #706C68;
      display: block;
      margin-bottom: 40px;
      top: auto;
      width: 100%;
      &:last-child {
        display: none;
      }
    }
    &:before {
      content: "";
      border-radius: 50%;
      background: #332F2D;
      border: 2px solid rgb(81, 77, 74, 50%);
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, 0);
      @media (min-width: 992px) {
        top: 50%;
        left: 15px;
        transform: translate(50%, -50%);
      }
    }
    .arrow {
      position: absolute;
      left: 0;
      transform: translate(-100%, -50%);
    }
  }
}
</style>
