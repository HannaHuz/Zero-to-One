<template>
  <nav class="nav" data-box="solutions">
    <button class="nav-solutions" @click="moveTo(1)">Solutions</button>
    <button class="nav-about" @click="moveTo(2)">About</button>
    <button class="nav-process" @click="moveTo(6)">Process</button>
    <button class="nav-case" @click="moveTo(7)">Past Work</button>
    <button class="nav-testimonials" @click="moveTo(9)">Testimonials</button>
    <button class="nav-blog" @click="moveTo(11)">Blog</button>
    <button class="nav-together" @click="moveTo(12)">Check Availability</button>
  </nav>
</template>
<script>
export default {
  methods: {
    moveTo(num) {
      this.$parent.$refs.pages.$fullpage.moveTo(num, 'slide1');
    }
  },
  mounted() {
    setTimeout(() => {
      this.$el.classList.add('nav-active')
    }, 0)
  }
}
</script>
<style lang="scss" scoped>
.nav {
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    width: 148px;
    z-index: 15;
    left: 7px;
    top: 310px;
    opacity: 0;
  }
   @media(min-width: 2000px) {
     width: 8vw;
     top: 18vw;
   }
  button {
    transition: .25s ease;
     @media(min-width: 2000px) {
       font-size: 1vw;
     }
    &:before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
       @media(min-width: 2000px) {
         width: 0.5vw;
         height: 0.5vw;
         margin-right: 0.5vw;
       }
    }
    &.white {
      color: #ADACAB;
    }
    &.black {
      color: #706C68;
    }
  }
  &[data-box="solutions"] {
    .nav-solutions {
      font-size: 20px;
      color: #282257;
      &:before {
        background-color: #F43155;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="about"] {
    .nav-about {
      font-size: 20px;
      color: #DDD9D2;
      &[data-mode="white"] {
        color: #332F2D
      }
      &[data-mode="black"] {
        color: #DDD9D2
      }
      &:before {
        background-color: #F7F116;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="case"] {
    .nav-case {
      font-size: 20px;
      color: #332F2D;
      &:before {
        background-color: #F43155;
      }
      &.black {
        color: #DDD9D2;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="process"] {
    .nav-process {
      font-size: 20px;
      color: #DDD9D2;
      &:before {
        background-color: #50D39E;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="testimonials"] {
    .nav-testimonials {
      font-size: 20px;
      color: #332F2D;
      &:before {
        background-color: #F7F116;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="blog"] {
    .nav-blog {
      font-size: 20px;
      color: #332F2D;
      &.black {
        color: #DDD9D2;
      }
      &:before {
        background-color: #50D39E;
      }
       @media(min-width: 2000px) {
         font-size: 1.4vw;
       }
    }
  }
  &[data-box="together"] {
    .nav-together {
      font-size: 20px;
      color: #332F2D;
      &.black {
        color: #DDD9D2;
      }
      &:before {
        background-color: #FF7403;
      }
      &:after {
        display: none;
      }
      @media(min-width: 2000px) {
        font-size: 1.4vw;
      }
    }
  }
  &-active {
    opacity: 1;
    transform: translate(0, 0);
  }
}
button {
  text-align: right;
  display: block;
  width: 100%;
  padding: 0;
  background: 0;
  border: 0;
  font-family: 'Queens Condensed';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #ADACAB;
  margin: 8px 0px;
  img {
    display: inline-block;
  }
}
</style>
