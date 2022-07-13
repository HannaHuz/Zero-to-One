<template>
  <section id="stillhere" class="stillhere" @mousemove="coursorAction" @click="moveTo(12)">
    <div class="container">
      <div class="stillhere-title">
        <svg class="animated del-40" data-anim="fadeInUp" width="112" height="127" viewBox="0 0 112 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.49655 118.399V126.565H110.958V118.399C110.958 91.4531 91.6743 69.0625 66.2329 64.3352H111.429V55.9978C111.429 25.055 86.5004 0 55.7143 0C24.9281 0 0 25.055 0 55.9978V64.3352H46.2218C20.7805 69.0625 1.49655 91.4531 1.49655 118.399Z" fill="url(#paint0_radial_1710_2)" /><defs><radialGradient id="paint0_radial_1710_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.7143) rotate(90) scale(126.565 190.117)"><stop stop-color="#F43155" /><stop offset="0.364583" stop-color="#F43155" /><stop offset="0.952271" stop-color="#332F2D" /></radialGradient></defs></svg>
        <h2 class="animated del-10" data-anim="fadeInUp">What Are You Doing Down Here?</h2>
      </div>
    </div>
    <div class="stillhere-border animated del-20" data-anim="zoomIn" id="border" :style="`left: ${coursorX}px; top: ${coursorY}px;`">If you made it all the way down here then that means you’re interested. Schedule a no-commitment call with our team.</div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      coursorX: 0,
      coursorY: 0
    }
  },
  methods: {
    moveTo(num) {
      this.$parent.$refs.pages.$fullpage.moveTo(num, 'slide12');
    },
    coursorAction(e) {
      const border = document.getElementById("border"),
        coursorXMax = this.$el.clientWidth - border.offsetWidth,
        coursorYMin = border.offsetHeight,
        coursorYMax = this.$el.clientHeight

      this.coursorX = (e.pageX > coursorXMax) ? coursorXMax : e.pageX
      if (e.pageY > coursorYMax) {
        this.coursorY = coursorYMax
      } else if (e.pageY > coursorYMin) {
        this.coursorY = e.pageY
      } else {
        this.coursorY = coursorYMin
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.stillhere {
  display: flex;
  flex-direction: column;
  background: #332F2D;
  * {
    pointer-events: none;
  }
  .container {
    position: relative;
    padding-top: 80px;
    padding-bottom: 160px;
  }
  &-title {
    position: relative;
    svg {
      position: absolute;
      top: -25px;
      left: -25px;
      @media(min-width: 2000px) {
        width: 6vw;
        height: auto;
      }
    }
    h2 {
      font-family: 'Queens Condensed';
      font-weight: 500;
      line-height: 1;
      text-align: left;
      color: #DDD9D2;
      padding-left: 16px;
      width: 760px;
      margin-bottom: 0;
      font-size: 110px;
      @media(min-width: 1200px) {
        font-size: 140px;
        padding-left: 0;
      }
      @media(min-width: 2000px) {
        font-size: 10vw;
        width: 52vw;
      }
    }
  }
  &-border {
    background: #332f2d;
    border: 1.2px solid #DDD9D2;
    line-height: 1.5;
    text-align: left;
    color: #DDD9D2;
    pointer-events: none;
    margin: 0 auto 63px;
    font-size: 18px;
    width: 483px;
    border-radius: 100px 100px 100px 0;
    padding: 40px;
    position: absolute;
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    z-index: 10;
    transform: translate(0, -100%);
    @media (min-width: 2000px) {
      font-size: 1.2vw;
      width: 32vw;
    }
  }
}
</style>
