<template>
  <section id="process" class="process" @mouseover="showSlider">
    <div class="container">
      <h2 class="animated" data-anim="fadeInUp">Our Winning <br> Process</h2>
      <div class="process-row-desc">
        <div class="process-block-desc">
          <div class="process-desc-text animated del-10" data-anim="fadeInLeft">
            <h6 class="animated del-20" data-anim="fadeInUp">{{ slides[step - 1].title }}</h6>
            <p class="animated del-40" data-anim="fadeInUp" v-if="slides[step-1].text">{{ slides[step - 1].text }}</p>
          </div>
          <div class="elips-wrap animated del-25" data-anim="fadeIn">
            <div class="elips elips-one"></div>
            <div class="elips elips-two"></div>
            <div class="elips elips-three"></div>
            <div class="elips elips-four"></div>
            <div class="elips elips-five"></div>
            <div class="elips elips-six"></div>
            <div class="elips elips-seven"></div>
            <img src="@/assets/img/home/process-arrow.png" class="elips-arrow">
            <div class="elips-num">0{{ this.step }}</div>
            <button class="elips-next" @click.prevent="nextSlide">
              <svg width="99" height="43" viewBox="0 0 99 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-9.74327e-07 22.29L99 22.29L99 20.71L-9.05263e-07 20.71L-9.74327e-07 22.29ZM99 20.71C95.135 20.71 89.0204 22.2234 83.8562 25.733C78.6639 29.2616 74.3706 34.8578 74.3706 43L75.9506 43C75.9506 35.5058 79.8703 30.3521 84.7443 27.0398C89.6463 23.7084 95.4514 22.29 99 22.29L99 20.71ZM99 20.71C95.4514 20.71 89.6463 19.2916 84.7442 15.9602C79.8703 12.6479 75.9506 7.49416 75.9506 -1.00752e-06L74.3706 -1.07658e-06C74.3706 8.1422 78.6639 13.7384 83.8562 17.267C89.0204 20.7766 95.135 22.29 99 22.29L99 20.71Z" fill="#FFE600"/></svg>
            </button>
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
      flag: true,
      winWidth: null,
      step: 1,
      slides: [
        {
          title: 'Research',
          text: 'The first step in our process begins with you filling out a deep dive questionnaire. This helps our team understand the important information that only you and your team know. While that is happening, our research team is scouring your competitors for any insights or advantages that they’ve discovered'
        },
        {
          title: 'Analysis',
          text: 'After the research process is finished, all the information we gather is taken to the creative and copy team. There they will sit down and brainstorm advertising angles and ideas that have the greatest chance of success.'
        },
        {
          title: 'Presentation',
          text: 'Once the advertising angles and ideas are compiled, we present a research deck to you and your team for feedback. This extra layer of approval helps us get even more important information from you that might come up after the research process is finished.'
        },
        {
          title: 'Writing',
          text: 'After you and your team approve the angles, our writers get to work. From here they will craft your copy based on the angles you approved of and then submit them for an intensive internal review. This review is conducted by multiple writers as well as other members of our team.'
        },
        {
          title: 'Review',
          text: 'Once the internal quality control process is done, it’s time for you to review. This is where you make sure everything is on-brand and inline with the agreed-upon angles. Any of your requested changes are fulfilled in this stage.'
        },
        {
          title: 'Development & Design (Optional)',
          text: 'If needed, this is the stage where your design and development work is completed and presented for your approval.'
        },
        {
          title: 'Testing',
          text: 'Now it’s go time. You test your new copy with your media buying team and give feedback to us on the performance. Based on the initial testing, new rounds of tweaks are made to your copy to optimize performance and maximize your return on investment. '
        }
      ]
    }
  },
  methods: {
    showSlider(){
      setTimeout(() => this.setElipses(),1000)
    },
    media() {
      this.winWidth = window.innerWidth
    },
    nextSlide() {
      const slideBox = document.querySelector('.process-desc-text'),
        elipsArrow = document.querySelector(".elips-arrow"),
        elipsNum = document.querySelector(".elips-num"),
        elipses = document.querySelectorAll('.elips')
      slideBox.classList.add('hide')
      elipsNum.style.transitionDelay = '0s'
      setTimeout(() => {
        if (this.step === 7) {
          this.step = 1;
          this.flag = true;
          this.setElipses()
        } else {
          this.step = this.step + 1;
          document.querySelector(`.elips-wrap div:nth-child(${this.step})`).style.width = `calc(100% + 3px * ${elipses.length - 1} - 24px * ${this.step})`
          document.querySelector(`.elips-wrap div:nth-child(${this.step})`).style.height = `calc(100% + 3px * ${elipses.length - 1} - 24px * ${this.step})`
          elipsArrow.style.offsetDistance = `${this.step * 100 / 7}%`;
          if (this.step === 7) {
            elipsNum.style.left = `220px`
            setTimeout(() => {
              elipsArrow.style.transitionDuration = '0s';
              elipsArrow.style.offsetDistance = `0%`;
              setTimeout(() => {
                elipsArrow.style.transitionDuration = '1s';
              }, 500);
            }, 1000);
          } else {
            elipsNum.style.left = `${this.step * 24}px`
          }
        }
        slideBox.classList.remove('hide')
      }, 1000);
    },
    setElipses() {
      if (this.flag && this.winWidth > 992) { // comment line
        this.flag = false;
        const elipses = document.querySelectorAll('.elips')
        elipses.forEach((elips, index) => {
          if (elips) {
            let position = elipses.length - index + 1
            elips.style.transitionDelay = `${index / elipses.length}s`
            setTimeout(() => {
              elips.style.transitionDelay = `0s`
            }, 1000);
            if (index !== 0) {
              elips.style.width = `calc(100% / ${elipses.length} + 24px * ${position} + 3px * ${elipses.length})`
              elips.style.height = `calc(100% / ${elipses.length} + 24px + 24px * ${position} + 3px * ${elipses.length})`
            } else {
              elips.style.width = '100%'
              elips.style.height = '100%'
            }
          }
        })
        document.querySelector('.elips-arrow').style.opacity = 1
        document.querySelector('.elips-num').style.opacity = 1
        document.querySelector('.elips-num').style.left = `36px`
      }
    }
  },
  mounted() {
    this.media()
    window.onresize = () => this.media()
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    if(isSafari){
      const elipsArrow = document.querySelector('.elips-arrow')
      elipsArrow.style.top = '50%'
      elipsArrow.style.right = '-27.5px'
    }
  }
}
</script>
<style lang="scss" scoped>
.process {
  background: #332F2D;
  .container {
    position: relative;
    z-index: 2;
  }
  &-row {
    position: relative;
  }
  &-block {
    position: relative;
    padding-left: 45px;
    padding-top: 63px;
    &:before {
      content: "";
      position: absolute;
      background: #332F2D;
      border: 2px solid #918C3D;
      z-index: 2;
      width: 20px;
      height: 20px;
      border-radius: 50%;
        top: 120px;
        left: 3px;
        transform: translateY(-50%);
    }
    &:after {
      content: "";
      background: #918C3D;
      position: absolute;
      z-index: 1;
      @media(max-width: 1200px) {
        left: 15px;
        top: 0;
        height: 100%;
        width: 1.5px;
        transform: translateX(-50%);
      }
    }
    &:first-child {
      padding-top: 0;
      h3 {
        margin-top: 24px;
      }
    }
    &:last-child {
      &:after {
        @media(max-width: 1200px) {
          height: 260px;
          background: linear-gradient( 202deg , #918C3D, transparent);
        }
      }
    }
  }
  &-block-desc {
      padding-left: 110px;
      @media(min-width: 1200px) {
        display: flex;
      }
      &:first-child {
        p {
          margin-bottom: 16px;
        }
      }
  }
  &-desc-text {
    width: 352px;
    position: relative;
    margin-bottom: 30px;
    @media(min-width: 1200px) {
      min-height: 265px;
    }
    &:before {
      content: 'STEP:';
      font-family: 'ABC Favorit Extended';
      font-size: 16px;
      font-weight: 350;
      line-height: 1;
      color: #706C68;
      position: absolute;
      top: 12%;
      left: -20%;
      @media (min-width: 2000px) {
        font-size: 1.1vw;
        left: -5vw;
      }
    }
    &.hide {
      h6, p, ul li {
        &:before {
          width: calc(100% + 4px);
        }
      }
    }
  }
  h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    color: #DDD9D2;
    font-size: 90px;
    width: 100%;
    margin-bottom: 64px;
    @media (min-width:1200px) {
      font-size: 140px;
      width: 455px;
    }
    @media(min-width:2000px){
      font-size: 8vw;
      width: 20vw;
    }
  }
  h3 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    margin-bottom: 8px;
    color: #DDD9D2;
    font-size: 20px;
    letter-spacing: 0.03em;
  }
  h6 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    color: #DDD9D2;
    position: relative;
    width: 438px;
    font-size: 58px;
    margin-bottom: 18px;
    @media(min-width:2000px){
      font-size: 3vw;
      width: 22vw;
    }
    &:before {
      content: "";
      transition: width 1s ease-in-out;
      background: #332F2D;
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: calc(100% + 4px);
      transform: translate(-2px, -2px);
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    line-height: 1.5;
    color: #ADACAB;
    position: relative;
    font-size: 14px;
    width: 100%;
    @media (min-width: 2000px) {
      font-size: 1.1vw;
      width: 26vw;
    }
    &:before {
      content: "";
      transition: width .5s ease-in-out .5s;
      background: #332F2D;
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: calc(100% + 4px);
      transform: translate(-2px, -2px);
    }
  }
  &-desc-img {
    position: relative;
  }
}
.elips {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  border-radius: 50%;
  transition: 1s ease;
  background: linear-gradient(0deg, #F7F116 0%, #EDE860 36%, #332F2D 105%);
  width: 0px;
  height: 0px;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    background: #332F2D;
    border-radius: 50%;
    z-index: 1;
  }
  &-wrap {
    width: 450px;
    height: 560px;
    position: relative;
    @media(max-width: 1999px){
      transform: scale(0.8);
      right: 0;
    }
    @media(min-width: 1200px) {
      position: absolute;
      top: 0;
      right: 80px;
    }
    @media(min-width: 2000px) {
      transform: scale(1.5);
      right: 0;
      top: 30%;
    }
    @media(min-width: 3000px) {
      transform: scale(2);
    }
  }

  &-arrow {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    display: block;
    transform-origin: center bottom;
    width: 55px;
    max-width: 55px;
    height: 30px;
    z-index: 10;
    offset-path: path("M449.5 280C449.5 434.471 348.891 559.5 225 559.5C101.109 559.5 0.5 434.471 0.5 280C0.5 125.529 101.109 0.5 225 0.5C348.891 0.5 449.5 125.529 449.5 280Z");
    offset-rotate: auto -90deg;
    transition: 1s ease;
    opacity: 0;
  }
  &-num {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 140px;
    line-height: 1;
    text-shadow: #706C68 1px 0px,
    #706C68 1px 1px,
    #706C68 0px 1px,
    #706C68 -1px 1px,
    #706C68 -1px 0px,
    #706C68 -1px -1px,
    #706C68 0px -1px,
    #706C68 1px -1px;
    color: #332F2D;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 24px;
    opacity: 0;
    transition: 1s ease .5s;
    transform: translate(0, calc(-50% + 20px));
    z-index: 11;
  }
  &-next {
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 0;
    background: none;
    font-weight: 500;
    display: flex;
    border: 2.5px solid #4F4F19;
    border-radius: 50%;
    width: 200px;
    height: 85px;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, 50px);
    @media(max-width: 767px) {
      display: none;
    }
    @media(min-width: 1200px) {
      transform: translate(-50%, 100%);
    }
    svg {
      display: block;
      transition: 0.3s ease;
      transform: translate(-50px, 0);
      width: 150px;
      height: 99px;
    }
    &:hover {
      svg {
        transform: translate(0, 0);
      }
    }
    &:active {
      svg {
        left: 100%;
        transform: translate(100px, 0);
      }
    }
  }
}
</style>
