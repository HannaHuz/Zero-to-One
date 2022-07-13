<template>
  <section id="stillhere" class="stillhere" @mousemove="coursorAction" @click.prevent="goTo('together')">
    <div class="container">
      <h2>What Are You Doing Down Here?</h2>
    </div>
    <div class="stillhere-border" id="border" :style="`left: ${coursorX}px; top: ${coursorY}px;`">If you made it all the way down here then that means you’re interested. Schedule a no-commitment call with our team.</div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      coursorX: 0,
      coursorY: 0
    }
  },
  methods: {
    goTo(section){
      document.getElementById(section).scrollIntoView({block: "start", behavior: "smooth"});
    },
    coursorAction(e){
      const border = document.getElementById("border"),
            coursorXMax = this.$el.clientWidth - border.offsetWidth,
            coursorYMin = border.offsetHeight,
            coursorYMax = this.$el.clientHeight
      this.coursorX = (e.layerX > coursorXMax) ? coursorXMax : e.layerX
      if(e.layerY > coursorYMax) {
        this.coursorY = coursorYMax
      } else if(e.layerY > coursorYMin) {
        this.coursorY = e.layerY
      } else {
        this.coursorY = coursorYMin
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.stillhere {
  background: #332F2D;
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  @media(min-width: 768px) {
    padding: 100px 0 160px;
  }
  @media(max-width: 768px){
    &:after{
      content: "";
      height: 300px;
      width: 100%;
      background: #000000;
      opacity: 0.1;
      filter: blur(100px);
      position: absolute;
      left: 0; top: 0;
      transform: translate(0, -50%);
    }
  }
  * {
    pointer-events: none;
  }
  .container {
    position: relative;
  }

  h2 {
    font-family: 'Queens Condensed';
    font-size: 68px;
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: #DDD9D2;
    margin-bottom: 55px;
    padding-left: 31px;
    width: 328px;
    position: relative;
    z-index: 2;
    @media(min-width: 768px) {
      width: 760px;
      font-size: 110px;
      line-height: 1.3;
    }
    &:before {
      @media(min-width: 768px) {
        position: absolute;
        z-index: -3;
        content: url("@/assets/img/home/together-title_desc.png");
        top: -40px;
        left: 0;
      }
    }
  }
  &-border {
    border: 1.2px solid #DDD9D2;
    border-radius: 50px 0 50px 50px;
    padding: 30px;
    font-family: 'ABC Favorit Extended';
    font-size: 15px;
    line-height: 1.5;
    font-weight: 350;
    text-align: left;
    color: #DDD9D2;
    pointer-events: none;
    width: 325px;
    margin: 0 auto 63px;
    @media(max-width: 992px) {
      left: auto !important;
      top: auto !important;
      margin-bottom: 0;
    }
  }
}
</style>
