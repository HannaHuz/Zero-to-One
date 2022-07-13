<template>
  <section class="cases" id="case">
    <video class="book" ref="video" width="100%" muted loop playsinline>
      <source src="https://021.inc/video/book.ogv" type="video/ogg">
      <source src="https://021.inc/video/book.webm" type="video/webm">
      <source src="https://021.inc/video/book.mp4" type="video/mp4">
    </video>
    <div class="container">
      <div class="cases-title">
        <svg width="80" height="89" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2372 40.1183H25.9358C13.1684 43.5381 4.03663 52.4757 4.03663 62.965C4.03663 76.3857 19.0082 87.2774 37.4722 87.2774C55.9363 87.2774 70.9078 76.3857 70.9078 62.965C70.9078 52.4757 61.776 43.5381 49.0086 40.1183H54.4763C65.4402 40.0034 74.2857 31.0658 74.2857 20.0591C74.2857 9.05248 65.4402 0.0862141 54.4763 0H0.000282736V20.8063C-0.05697 31.4682 8.58818 40.1183 19.2372 40.1183Z" fill="url(#paint0_radial_1425_2711)" /><defs><radialGradient id="paint0_radial_1425_2711" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37.1428) rotate(90) scale(92.3508 235.665)"><stop stop-color="#50D39E" /><stop offset="0.343434" stop-color="#50D39E" /><stop offset="0.781145" stop-color="#DDD9D2" stop-opacity="0" /></radialGradient></defs></svg>
        <h2>Past Work</h2>
        <div class="cases-num"> {{ items[index].step }}/3</div>
      </div>
      <div class="cases-row">
        <div class="cases-right">
          <div class="items">
            <img class="item-zero" src="@/assets/img/home/cases-mob_3.png">
            <img class="item-first" id="itemFirst" src="@/assets/img/home/cases-mob_3.png">
            <img class="item-second" id="itemSecond" src="@/assets/img/home/cases-mob_2.png">
            <img class="item-third" id="itemThird" src="@/assets/img/home/cases-mob_1.png">
          </div>
          <div class="cases-btn">
            <button @click="indexChange('prev')">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43 23.5L4 23.5M4 23.5C7.46522 23.5 15.1429 20.6364 15.1429 13M4 23.5C7.46522 23.5 15.1429 26.3636 15.1429 34" stroke="#706C68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </button>
            <button @click="indexChange('next')">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24.5L44 24.5M44 24.5C40.5348 24.5 32.8571 27.3636 32.8571 35M44 24.5C40.5348 24.5 32.8571 21.6364 32.8571 14" stroke="#706C68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </button>
          </div>
        </div>
        <div class="cases-left">
          Our team has written in almost every industry from E-commerce, to Finance, to Lead Generation and excelled in each. Our writers are trained through a meticulous process that makes writing winning advertisements possible, regardless of niche.
          <div class="slider-nav">
            <div class="slider-count">
              <span v-if="slide == 0 || slide == 6">1</span>
              <span v-if="slide == 2">2</span>
              <span v-if="slide == 4">3</span>
              /3
            </div>
            <svg class="slider-btn" @click.prevent="next" width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.5L40 11.5M40 11.5C36.5348 11.5 28.8571 14.3636 28.8571 22M40 11.5C36.5348 11.5 28.8571 8.63636 28.8571 1" stroke="#706C68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
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
      index: 0,
      slide: 0,
      items: [{
          step: '1',
          h4: 'Request:',
          img: require('@/assets/img/home/cases-mob_3.png'),
        },
        {
          step: '2',
          img: require('@/assets/img/home/cases-mob_2.png'),
        },
        {
          step: '3',
          img: require('@/assets/img/home/cases-mob_1.png'),
        },
      ],
    }
  },
  methods: {
    next() {
      this.$refs.video.play()
      if (this.slide >= 6) {
        this.slide = 0
      }
      this.slide = this.slide + 2
      const interval = setInterval(() => {
        if (this.$refs.video.currentTime >= this.slide) {
          this.$refs.video.pause()
          clearInterval(interval)
        }
      }, 10);
    },
    indexChange(point) {
      const
        itemFirstClass = document.querySelector('.item-first'),
        itemLastClass = document.querySelector('.item-third'),
        itemFirst = document.getElementById('itemFirst'),
        itemSecond = document.getElementById('itemSecond'),
        itemThird = document.getElementById('itemThird')

      if (point === 'prev') {
        if (this.index === 0) {
          this.index = 2;
        } else {
          this.index = this.index - 1;
        }
        itemLastClass.classList = 'item-anim'
      }
      if (point === 'next') {
        if (this.index === 2) {
          this.index = 0;
        } else {
          this.index = this.index + 1;
        }
        itemFirstClass.classList = 'item-anim'
      }


      setTimeout(() => {
        if (this.index === 0) {
          itemFirst.classList = 'item-first'
          itemSecond.classList = 'item-second'
          itemThird.classList = 'item-third'
        } else if (this.index === 1) {
          itemSecond.classList = 'item-first'
          itemThird.classList = 'item-second'
          itemFirst.classList = 'item-third'
        } else if (this.index === 2) {
          itemThird.classList = 'item-first'
          itemFirst.classList = 'item-second'
          itemSecond.classList = 'item-third'
        }
      }, 500);

    }
  }
}

</script>
<style lang="scss" scoped>
.cases {
  position: relative;
  overflow: hidden;
  padding: 72px 0 60px;
  @media(min-width: 768px) {
    padding: 100px 0;
    background: #fff;
  }
  &-title {
    position: relative;
    svg {
      position: absolute;
      top: -10px;
      left: 0;
      width: 50px;
      height: 58px;
      @media(min-width: 768px) {
        width: 74px;
        height: 87px;
      }
    }
  }
  h2 {
    font-family: 'Queens Condensed';
    font-size: 42px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 17px;
    position: relative;
    z-index: 2;
    padding-left: 16px;
    color: #332F2D;
    @media(min-width: 375px) {
      font-size: 52px;
    }
    @media(min-width: 768px) {
      font-size: 90px;
      margin-bottom: 50px;
    }
  }
  h5 {
    width: 200px;
  }
  &-row {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
  &-right {
    position: relative;
    svg {
      width: 30px;
      @media (min-width: 768px) {
        width: 48px;
      }
      @media (max-width: 767px) {
        &:active {
          path {
            transform: translateX(-10px);
            stroke: #ADACAB;
          }
        }
      }
    }
  }
  &-left {
    font-family: 'ABC Favorit Extended';
    font-size: 15px;
    font-style: normal;
    font-weight: 350;
    line-height: 23px;
    text-align: left;
    color: #332F2D;
    padding-left: 16px;
    @media (min-width: 768px) {
      width: 280px;
    }
  }
  &-num {
    position: absolute;
    top: 50%;
    right: 0;
    font-family: 'Queens Condensed';
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
    color: #706C68;
    transform: translate(0, -50%);
    @media (min-width: 768px) {
      display: none;
    }
  }
  &-btn {
    text-align: right;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 11;
    @media (min-width: 768px) {
      display: none;
    }
    button {
      border: none;
      background: none;
      svg {
        width: 50px;
      }
    }
  }
  .items {
    position: relative;
    width: 100%;
    margin-bottom: 70px;
    @media (min-width: 768px) {
      display: none;
    }
    &>img {
      display: block;
      width: 255px;
      height: auto;
      position: absolute;
      left: 0;
      top: 50%;
      transition: .5s ease-in-out, z-index 0s;
    }
    .item {
      &-zero {
        opacity: 0;
        top: 0;
        position: relative;
        width: calc(100% - 50px);
      }
      &-first {
        z-index: 5;
        width: calc(100% - 30px);
        transform: translate(0, -50%);
      }
      &-second {
        z-index: 4;
        width: calc(100% - 60px);
        transform: translate(60px, -46%);
        filter: blur(2px);
      }
      &-third {
        z-index: 3;
        width: calc(100% - 76px);
        transform: translate(100px, -44%);
        filter: blur(2px);
      }
      &-anim {
        transition: .5s ease-in-out;
        transform: translate(-100%, -50%);
        z-index: 5;
      }
    }
  }
}
.slider {
  &-nav {
    border-top: 2px solid #ADACAB;
    padding-top: 20px;
    font-family: 'Queens Condensed';
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 178px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &-count {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    color: #706C68;
  }
  &-btn {
    display: block;
    width: 41px;
    height: auto;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1);
    }
  }
}
.book {
  position: absolute;
  top: 0;
  left: 50%;
  width: 800px;
  height: 100%;
  display: block;
  transform: translate(-10%, -12.5%);
  @media (max-width: 767px) {
    display: none;
  }
}
</style>
