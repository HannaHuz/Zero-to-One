<template>
  <section id="together">
    <div class="container">
      <div class="together-title">
        <svg v-if="step===false" width="112" height="127" viewBox="0 0 112 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.49655 118.4V126.565H110.958V118.4C110.958 91.4536 91.6743 69.063 66.2329 64.3357H111.429V55.9983C111.429 25.0555 86.5004 0.000488281 55.7143 0.000488281C24.9281 0.000488281 0 25.0555 0 55.9983V64.3357H46.2218C20.7805 69.063 1.49655 91.4536 1.49655 118.4Z" fill="url(#paint0_radial_1853_145)" /><defs><radialGradient id="paint0_radial_1853_145" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.7143 0.000485171) rotate(90) scale(133.922 353.497)"><stop stop-color="#50D39E" /><stop offset="0.343434" stop-color="#50D39E" /><stop offset="0.781145" stop-color="#332F2D" /></radialGradient></defs></svg>
        <svg v-else width="112" height="127" viewBox="0 0 112 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.49655 118.399V126.565H110.958V118.399C110.958 91.4531 91.6743 69.0625 66.2329 64.3352H111.429V55.9978C111.429 25.055 86.5004 0 55.7143 0C24.9281 0 0 25.055 0 55.9978V64.3352H46.2218C20.7805 69.0625 1.49655 91.4531 1.49655 118.399Z" fill="url(#paint0_radial_1710_2)" /><defs><radialGradient id="paint0_radial_1710_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.7143) rotate(90) scale(126.565 190.117)"><stop stop-color="#F43155" /><stop offset="0.364583" stop-color="#F43155" /><stop offset="0.952271" stop-color="#332F2D" /></radialGradient></defs></svg>
        <h2 v-html="title"></h2>
        <h5 v-if="subtitle" v-html="subtitle"></h5>
      </div>
      <div class="steper" v-if="step > 1 && step < 15">{{ step }}/14</div>
      <div v-if="step === 1">
        <form class="step step-one" @submit="stepOne">
          <div class="field">
            <input type="text" v-model="firstName" id="first_name" minlength="2" maxlength="30" required>
            <label for="first_name" :class="(firstName && firstName.length > 0)? 'active':''">First name <span>*</span></label>
          </div>
          <div class="field">
            <input type="text" v-model="companyName" id="company" minlength="2" maxlength="30" required>
            <label for="company" :class="(companyName && companyName.length > 0)? 'active':''">Company name
              <span>*</span></label>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 2">
        <form class="step step-two" @submit="stepTwo">
          <div class="field">
            <input type="email" v-model="emailAddress" id="email" required>
            <label for="email" :class="(emailAddress && emailAddress.length > 0)? 'active':''">Email
              <span>*</span></label>
          </div>
          <div class="field">
            <input type="tel" v-model="phoneNumber" id="tel" minlength="11" maxlength="11" @input="phoneNumberInput" required>
            <label for="tel" :class="(phoneNumber && phoneNumber.length > 0)? 'active':''"> Phone Number <span>*</span></label>
          </div>
          <div class="btn">
            <input type="submit" value="Continue ">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 3">
        <form class="step step-three" @submit="stepThree">
          <div class="field">
            <label for="product-links" class="static">Please provide us with links to your current products/offers <span>*</span></label>
            <textarea id="product-links" v-model="productLinks" minlength="10" cols="10" rows="10" required></textarea>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 4">
        <form class="step step-four" @submit="stepFour">
          <div class="field">
            <label for="channels" class="static">What channels/networks are you currently advertising this product/offer on? <span>*</span></label>
            <textarea id="channels" v-model="channels" minlength="10" cols="10" rows="10" required></textarea>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 5">
        <form class="step step-five" @submit="stepFive">
          <div class="field">
            <label for="how-much" class="static">How much are you spending per day on each? <span>*</span></label>
            <input id="how-much" v-model="howMuch" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 6">
        <form class="step step-six" @submit="stepSix">
          <div class="field">
            <label for="cost" class="static">What is your Cost Per Acquisition Goal? <span>*</span></label>
            <input id="cost" v-model="cost" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 7">
        <form class="step step-seven" @submit="stepSeven">
          <div class="field">
            <label for="average-value" class="static">What is your Average Order Value? <span>*</span></label>
            <input id="average-value" v-model="averageValue" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 8">
        <form class="step step-eight" @submit="stepEight">
          <div class="field">
            <label for="goal" class="static">What is your ROAS/ROI Goal? <span>*</span></label>
            <input id="goal" v-model="goal" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 9">
        <form class="step step-nine" @submit="stepNine">
          <div class="field">
            <label for="units" class="static">How many units a day are you currently selling? <span>*</span></label>
            <input id="units" v-model="units" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 10">
        <form class="step step-ten" @submit="stepTen">
          <div class="field">
            <label for="website-framework" class="static">What website framework are you working with? <span>*</span></label>
            <input id="website-framework" v-model="websiteFramework" minlength="2" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 11">
        <form class="step step-eleven" @submit="stepEleven">
          <div class="field">
            <label for="current-goal" class="static">What are your current goals/issues? <span>*</span></label>
            <textarea id="current-goal" v-model="currentGoal" minlength="10" cols="10" rows="10" required></textarea>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 12">
        <form class="step step-twelve" @submit="stepTwelve">
          <div class="field">
            <label for="help" class="static">How do you think we can help? <span>*</span></label>
            <textarea id="help" v-model="help" minlength="10" cols="10" rows="10" required></textarea>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 13">
        <form class="step step-thirteen" @submit="stepThirteen">
          <div class="field">
            <label for="copy" class="static">Do you already know what kind of copy you need? (Advertorials, Emails, Facebook Ads, etc.) <span>*</span></label>
            <textarea id="copy" v-model="copy" minlength="10" cols="10" rows="10" required></textarea>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
      <div v-else-if="step === 14">
        <form class="step step-fourteen" @submit="stepFourteen">
          <div class="field">
            <label for="hear-about" class="static">How did you hear about us? <span>*</span></label>
            <input id="hear-about" v-model="hearAbout" minlength="10" required>
          </div>
          <div class="btn">
            <input type="submit" value="Continue">
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7L22.5 7M22.5 7C20.6341 7 16.5 8.5 16.5 12.5M22.5 7C20.6341 7 16.5 5.5 16.5 1.5" stroke="#DDD9D2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </form>
      </div>
    </div>
    <Loader v-if="loader" />
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  data() {
    return {
      loader: false,
      step: 1,
      title: 'Ready To <br> Get Started?',
      subtitle: 'Let’s work together to bring you more sales.',
      status: false,
      firstName: null,
      companyName: null,
      emailAddress: null,
      phoneNumber: null,
      productLinks: null,
      channels: null,
      howMuch: null,
      cost: null,
      averageValue: null,
      goal: null,
      units: null,
      websiteFramework: null,
      currentGoal: null,
      help: null,
      copy: null,
      hearAbout: null,
    }
  },
  methods: {
    submitQuiz(e) {
      e.preventDefault()
    },
    stepOne(e) {
      e.preventDefault()
      this.step = 2;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepTwo(e) {
      e.preventDefault()
      this.step = 3;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepThree(e) {
      e.preventDefault()
      this.step = 4;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepFour(e) {
      e.preventDefault()
      this.step = 5;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepFive(e) {
      e.preventDefault()
      this.step = 6;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepSix(e) {
      e.preventDefault()
      this.step = 7;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepSeven(e) {
      e.preventDefault()
      this.step = 8;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepEight(e) {
      e.preventDefault()
      this.step = 9;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepNine(e) {
      e.preventDefault()
      this.step = 10;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepTen(e) {
      e.preventDefault()
      this.step = 11;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepEleven(e) {
      e.preventDefault()
      this.step = 12;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepTwelve(e) {
      e.preventDefault()
      this.step = 13;
      this.title = 'Thank you!<br>Next step:'
      this.subtitle = false
    },
    stepThirteen(e) {
      e.preventDefault()
      this.step = 14;
      this.title = 'Great!<br>Last step:'
      this.subtitle = false
    },
    stepFourteen(e) {
      e.preventDefault()
      this.loader = true
      const quizData = {
        firstName: this.firstName,
        companyName: this.companyName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        productLinks: this.productLinks,
        channels: this.channels,
        howMuch: this.howMuch,
        cost: this.cost,
        averageValue: this.averageValue,
        goal: this.goal,
        units: this.units,
        websiteFramework: this.websiteFramework,
        currentGoal: this.currentGoal,
        help: this.help,
        copy: this.copy,
        hearAbout: this.hearAbout
      }
      Request.addTask(quizData)
        .then(result => {
          this.loader = false
          if (result.status === 'success') {
            this.step = false;
            this.title = 'Thank you for your message!'
            this.subtitle = 'Your submission has been received!'
          } else {
            console.log(result)
            this.step = false;
            this.title = 'An error has occurred!'
            this.subtitle = 'Please contact us by email: hello@021.inc'
          }
        })
    },
    phoneNumberInput(e) {
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.phoneNumber = arr.toString().replace(/[,]/g, '');
    }
  }
}

</script>
<style lang="scss" scoped>
section {
  background: #332F2D;
  position: relative;
  overflow: hidden;
  padding: 68px 0 60px;
  @media(min-width: 768px) {
    padding: 100px 0;
  }
  .container {
    @media (max-width: 768px) {
      padding: 0 15px 0 31px;
    }
    position: relative;
    z-index: 2;
  }
  .together-title {
    position: relative;
    svg {
      position: absolute;
      z-index: -1;
      top: -15px;
      left: -15px;
      width: 50px;
      height: 60px;
      @media(min-width: 768px) {
        top: -35px;
        width: 111px;
        height: 126px;
      }
    }
  }
  h2 {
    font-family: 'Queens Condensed';
    font-size: 72px;
    font-weight: 500;
    line-height: 1;
    color: #DDD9D2;
    margin-bottom: 24px;
    @media (min-width: 768px) {
      margin-right: 30px;
      padding-left: 16px;
      font-size: 110px;
      display: inline-block;
    }
  }
  h5 {
    font-family: 'ABC Favorit Extended';
    font-size: 18px;
    font-weight: 350;
    color: #706C68;
    margin-bottom: 51px;
    @media (min-width: 992px) {
      display: inline-block;
      width: 165px;
      margin-bottom: 0;
    }
  }
  .steper {
    font-size: 20px;
    color: #706C68;
    margin-bottom: 52px;
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    &:before {
      content: 'Steps: ';
      font-size: 20px;
      color: #706C68;
      @media(min-width: 768px) {
        display: none;
      }
    }
    @media(min-width: 768px) {
      font-family: 'Queens Condensed';
      font-weight: 500;
      font-size: 72px;
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
      position: absolute;
      right: 0;
      top: 36%;
    }
  }
  .step {
    width: 100%;
    display: block;
    @media (min-width: 768px) {
      display: flex;
    }
    &-one,
    &-two {
      .field {
        @media (min-width: 768px) {
          flex: 1 204px;
          max-width: 204px;
          &:not(:first-child) {
            margin-left: 30px;
          }
        }
      }
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
      font-family: 'ABC Favorit Extended';
      font-weight: 350;
      font-size: 14px;
      line-height: 24px;
      min-height: 24px;
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
      &.static {
        position: relative;
        transform: none;
      }
    }
    input,
    textarea {
      display: block;
      background: none;
      width: 100%;
      border: none;
      margin: 0;
      border-bottom: 1px solid #ADACAB;
      font-family: 'ABC Favorit Extended';
      font-weight: 350;
      font-size: 16px;
      line-height: 21px;
      color: #ADACAB;
      height: 34px;
      caret-color: #F43155;
      padding: 5px;
      &:focus {
        outline: none !important;
        &+label {
          transform: translateY(-100%);
        }
      }
    }
    textarea {
      resize: vertical;
    }
  }
  .btn {
    align-items: start;
    position: relative;
    width: 148px;
    margin: 0 auto;
    @media (min-width: 768px) {
      margin-top: 40px;
      margin-left: 60px;
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
</style>
