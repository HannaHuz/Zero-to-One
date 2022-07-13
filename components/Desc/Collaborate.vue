<template>
  <section id="collaborate" class="collaborate">
    <div class="container">
      <div class="collaborate-animation"></div>
      <div class="collaborate-content">
        <h2>
          <span class="animated del-20" data-anim="zoomIn">Still Have</span>
          <span class="animated del-40" data-anim="zoomIn">Questions?</span>
        </h2>
        <p class="animated del-60" data-anim="zoomIn">Schedule an informal meeting to get your questions answered. <br> This is a no-commitment call.</p>
        <button @click="moveTo(12)" class="btn animated del-80" data-anim="zoomIn">
          <svg width="148" height="133" viewBox="0 0 148 133" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-anim"><path d="M147.25 66.5C147.25 102.739 114.532 132.25 74 132.25C33.4677 132.25 0.75 102.739 0.75 66.5C0.75 30.2607 33.4677 0.75 74 0.75C114.532 0.75 147.25 30.2607 147.25 66.5Z" stroke="#332F2D" stroke-width="1.5" /></svg>
          Contact Us
          <svg class="btn-arrow" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 6.5L22.5 6.5M22.5 6.5C20.6341 6.5 16.5 8 16.5 12M22.5 6.5C20.6341 6.5 16.5 5 16.5 0.999996" stroke="#332F2D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    moveTo(num) {
      this.$parent.$refs.pages.$fullpage.moveTo(num, 'slide12');
    }
  }
}

</script>
<style lang="scss" scoped>
.collaborate {
  &-animation {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100vh;
    width: 910px;
    background-size: 100% auto;
    transform: translate(-50%, -50%);
    background: url('@/assets/img/home/collaborate-bg.png') no-repeat center center;
    transition: .5s linear;
    opacity: 0;
    @media(min-width: 992px) {
      transform: translate(calc(-50% + 70px), -50%);
    }
    @media(min-width:1200px) {
      transform: translate(calc(-50% + 70px), -50%);
    }
    @media(min-width:1440px) {
      transform: translate(calc(-50% + 90px), -50%);
    }
    @media(min-width:2000px) {
      transform: translate(-50%, -50%);
    }
    @media(min-width:3000px) {
      background-size: 40vw auto;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      width: calc(100% + 60px);
      top: 0;
      height: 100%;
      transition: 1s ease 1s;
    }
    &:before {
      transform: translate(-50%, -100%);
      background: linear-gradient(180deg, #DDD9D2 80%, rgba(221, 217, 210, 0) 90%);
    }
    &:after {
      transform: translate(-50%, 0%);
      background: linear-gradient(0deg, #DDD9D2 80%, rgba(221, 217, 210, 0) 90%);
    }
  }
  &-content {
    position: relative;
    z-index: 3;
  }
  .container {
    position: relative;
  }
  h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: #332F2D;
    margin-bottom: 40px;
    font-size: 110px;
    @media(min-width: 1200px) {
      font-size: 140px;
    }
    @media(min-width: 1400px) {
      width: 682px;
      margin: 0 auto;
    }
    @media(min-width:2000px) {
      font-size: 10vw;
      width: 40vw;
    }
    span {
      display: block;
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    line-height: 1.5;
    text-align: center;
    color: #332F2D;
    width: 248px;
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 16px;
    @media(min-width: 2000px) {
      font-size: 1.2vw;
      width: 19vw;
      margin-bottom: 2vw;
    }
  }
  .btn {
    position: relative;
    left: 50%;
    transform-origin: 0 0;
    transform: translate(-50%, 0);
    padding: 0 15px;
    text-align: center;
    background: none;
    height: 133px;
    border: 1.5px solid transparent;
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.03em;
    color: #332F2D;
    border-radius: 50%;
    @media(min-width: 2000px) {
      width: 9vw;
      height: 7.5vw;
      font-size: 1vw;
    }
    &:hover {
      .btn-arrow {
        transform: translateX(-10px);
      }
    }
    &-arrow {
      margin-left: 8px;
      display: inline-block;
      vertical-align: middle;
      transition: .3s ease;
      @media(min-width: 2000px) {
        width: 1.5vw;
        height: auto;
      }
    }
    &-anim {
      position: absolute;
      top: 0;
      left: 0;
      @media(min-width: 2000px) {
        width: 9vw;
        height: 7vw;
      }
    }
  }
}
.active {
  .collaborate-animation {
    transition: 1s linear 1s;
    opacity: 1;
    &:before {
      transform: translate(-50%, -50%);
    }
    &:after {
      transform: translate(-50%, 50%);
    }
  }
  .btn-anim path {
    stroke-width: 2;
    stroke-dasharray: 1300;
    stroke-dashoffset: 1300;
    animation: 2s linear forwards stroke;
    animation-delay: 1s;
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
