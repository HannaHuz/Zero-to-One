<template>
  <section class="subscribe">
    <div class="container">
      <div v-if="step===1">
        <div class="subscribe-title">
          <svg width="68" height="79" viewBox="0 0 68 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5539 36.0614H23.6664C12.0162 39.1354 3.68342 47.1691 3.68342 56.5978C3.68342 68.6613 17.345 78.4516 34.1934 78.4516C51.0418 78.4516 64.7034 68.6613 64.7034 56.5978C64.7034 47.1691 56.3706 39.1354 44.7204 36.0614H49.7096C59.7142 35.9581 67.7857 27.9243 67.7857 18.0307C67.7857 8.13706 59.7142 0.0774958 49.7096 0H0.000257997V18.7023C-0.0519851 28.286 7.83671 36.0614 17.5539 36.0614Z" fill="url(#paint0_radial_2071_426)" /><defs><radialGradient id="paint0_radial_2071_426" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.8929) rotate(90) scale(78.4516 115.654)"><stop stop-color="#F43155" /><stop offset="0.364583" stop-color="#F43155" /><stop offset="0.952271" stop-color="#332F2D" /></radialGradient></defs></svg>
          <h2>Subscribe to our newsletter</h2>
        </div>
        <h3>The latest articles and news from Zero To One in your inbox.</h3>
        <form @submit.prevent="subscribe">
          <div class="field">
            <input type="email" v-model="email" id="email" required>
            <label :class="(email && email.length > 0)? 'active':''" for="email">Your email <span>*</span></label>
          </div>
          <div class="btn">
            <input type="submit" value="Subscribe">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div class="thank-you" v-else-if="step===2">
        <div class="subscribe-title">
          <svg width="68" height="79" viewBox="0 0 68 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5539 36.0614H23.6664C12.0162 39.1354 3.68342 47.1691 3.68342 56.5978C3.68342 68.6613 17.345 78.4516 34.1934 78.4516C51.0418 78.4516 64.7034 68.6613 64.7034 56.5978C64.7034 47.1691 56.3706 39.1354 44.7204 36.0614H49.7096C59.7142 35.9581 67.7857 27.9243 67.7857 18.0307C67.7857 8.13706 59.7142 0.0774958 49.7096 0H0.000257997V18.7023C-0.0519851 28.286 7.83671 36.0614 17.5539 36.0614Z" fill="url(#paint0_radial_2071_426)" /><defs><radialGradient id="paint0_radial_2071_426" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.8929) rotate(90) scale(78.4516 115.654)"><stop stop-color="#F43155" /><stop offset="0.364583" stop-color="#F43155" /><stop offset="0.952271" stop-color="#332F2D" /></radialGradient></defs></svg>
          <h2>Thank you for <br> your message!</h2>
          <h5>Your submission has been received!</h5>
        </div>
      </div>
    </div>
    <Loader v-if="loader" />
  </section>
</template>
<script>
import Request from '@/services/Request'
export default {
  data() {
    return {
      loader: false,
      email: null,
      step: 1,
    }
  },
  methods: {
    subscribe() {
      this.loader = true
      Request.addSubscriber({
          email: this.email
        })
        .then(result => {
          this.loader = false
          if (result.status === 'success') {
            alert('Thank you for subscribing! Please check your email to confirm subscribing.')
          } else {
            alert('You are already a subscriber! Keep an eye out for new updates! ')
          }
          setTimeout(() => {
            this.$parent.$parent.idModal = false;
          }, 500);
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.subscribe {
  background: #332F2D;
  padding-top: 80px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
  .container {
    @media (max-width: 768px) {
      padding: 0 31px;
    }
    @media (min-width: 768px) {
      max-width: 800px;
    }
  }
  h2 {
    font-family: Queens Condensed;
    font-weight: 500;
    font-size: 51px;
    line-height: 70px;
    color: #DDD9D2;
    position: relative;
    z-index: 2;
    display: inline-block;
    @media (min-width: 768px) {
      font-size: 58px;
    }
  }
  h5 {
    font-family: ABC Favorit Extended;
    font-size: 18px;
    font-weight: 350;
    color: #706C68;
    margin-bottom: 51px;
    text-align: left;
    @media (min-width: 768px) {
      display: inline-block;
      transform: translate(30px, 0);
      width: 165px;
      margin-bottom: 0;
    }
  }
  h3 {
    font-family: ABC Favorit Extended;
    font-weight: 350;
    font-size: 20px;
    line-height: 21px;
    color: #706C68;
    margin-bottom: 51px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  &-title {
    position: relative;
    margin-bottom: 8px;
    svg {
      position: absolute;
      z-index: 1;
      top: 20px;
      left: -10px;
      width: 50px;
      height: 58px;
      transform: translate(0, -50%);
      @media (min-width: 768px) {
        width: 67px;
        height: 78px;
        left: -25px;
      }
    }
  }
  form {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
  .field {
    position: relative;
    width: 100%;
    margin-bottom: 60px;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
    label {
      display: block;
      width: 100%;
      font-family: ABC Favorit Extended;
      font-weight: 350;
      font-size: 14px;
      line-height: 24px;
      height: 24px;
      color: #706C68;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .2s ease;
      span {
        color: #F43155;
      }
      &.active {
        transform: translateY(-100%);
      }
    }
    input,
    textarea {
      display: block;
      outline: none !important;
      background: none !important;
      width: 100%;
      border: none;
      padding: 0;
      margin: 0;
      border-bottom: 1px solid #ADACAB;
      font-family: ABC Favorit Extended;
      font-weight: 350;
      font-size: 16px;
      line-height: 21px;
      color: #ADACAB;
      height: 34px;
      caret-color: #F43155;
      &:focus {
        &+label {
          transform: translateY(-100%);
        }
      }
    }
  }
  .btn {
    align-items: start;
    position: relative;
    width: 148px;
    margin: 0 auto;
    @media (min-width: 768px) {
      margin-left: 72px;
    }
    svg {
      position: absolute;
      top: 44%;
      display: inline-block;
      vertical-align: middle;
      transition: .3s ease;
      right: 15px;
      path {
        stroke: #DDD9D2;
      }
    }
    &:hover {
      svg {
        transform: translateX(-5px);
        path {
          stroke: #332F2D;
        }
      }
    }
    input {
      padding: 0 25px 0 0;
      background: none;
      height: 133px;
      border: 1.5px solid #DDD9D2;
      font-family: 'Queens Condensed';
      font-size: 20px;
      line-height: 26px;
      letter-spacing: 0.03em;
      color: #DDD9D2;
      border-radius: 50%;
      width: 148px;
      white-space: nowrap;
      &:hover {
        background: #DDD9D2;
        color: #332F2D;
      }
    }
  }
}
.layout-default {
  .subscribe {
    padding: 80px 0;
    @media (min-width: 768px) {
      padding: 120px 0;
      height: auto;
    }
    .container {
      @media (min-width: 768px) {
        padding-left: 0;
        padding-right: 0;
        max-width: 576px;
      }
      @media (min-width: 992px) {
        max-width: 800px;
      }
    }
    h2 {
      font-size: 45px;
      @media (min-width: 576px) {
        font-size: 58px;
      }
    }
    .thank-you {
      @media (min-width: 768px) {
        text-align: center;
      }
    }
  }
}
</style>
