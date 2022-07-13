<template>
  <div class="page page-full" @mousemove="coursorAction">

    <div class="coursor" :style="`left: ${coursorX}px; top: ${coursorY}px;`"></div>

    <DescNav v-if="this.winWidth >= 992" />
    <NavMob v-else />

    <img v-if="this.winWidth >= 992" src="@/assets/img/home/logo-white.png" class="fixed-logo fixed-white">
    <img v-if="this.winWidth >= 992" src="@/assets/img/home/logo-black.png" class="fixed-logo fixed-black">

    <div class="fullpage-wp" v-fullpage="opts" ref="pages" v-if="this.winWidth >= 992">
      <div class="page-1 page"  data-logo="black" data-mode="black" data-nav="solutions"><DescBanner /></div>
      <div class="page-2 page"  data-logo="black" data-mode="white" data-nav="solutions"><DescSolutions /></div>
      <div class="page-3 page"  data-logo="white" data-mode="black" data-nav="about"><DescBrandon /></div>
      <div class="page-4 page"  data-logo="white" data-mode="black" data-nav="about"><DescJames /></div>
      <div class="page-5 page"  data-logo="white" data-mode="black" data-nav="about"><DescNick /></div>
      <div class="page-6 page"  data-logo="white" data-mode="black" data-nav="about"><DescExperience /></div>
      <div class="page-7 page"  data-logo="white" data-mode="black" data-nav="process"><DescProcess /></div>
      <div class="page-8 page"  data-logo="black" data-mode="white" data-nav="case"><DescCases /></div>
      <div class="page-9 page"  data-logo="white" data-mode="black" data-nav="case"><DescApproach /></div>
      <div class="page-10 page" data-logo="black" data-mode="white" data-nav="testimonials"><DescTestimonials/></div>
      <div class="page-11 page" data-logo="black" data-mode="white" data-nav="testimonials"><DescCollaborate /></div>
      <div class="page-12 page" data-logo="black" data-mode="white" data-nav="blog"><DescBlog /></div>
      <div class="page-13 page" data-logo="white" data-mode="black" data-nav="together"><DescTogether /></div>
      <div class="page-14 page" data-logo="white" data-mode="black" data-nav="together">
        <DescStillhere />
      </div>
    </div>
    <div v-else >
      <MobBanner />
      <MobSolutions />
      <MobAbout />
      <MobExperience />
      <MobProcess />
      <MobCases />
      <MobApproach />
      <MobTestimonials />
      <MobCollaborate />
      <MobBlog />
      <MobTogether />
      <MobStillhere />
      <Footer/>
    </div>

    <DescFooter />

  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      logoMode: 'black',
      winWidth: null,
      coursorX: 0,
      coursorY: 0,
      opts: {
        start: 0,
        dir: 'v',
        duration: 1000,
        beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
          currentSlideEl.classList.remove('active')
          const aBlocks = currentSlideEl.querySelectorAll('.animated')
          aBlocks.forEach(aBlock => {
            aBlock.classList.remove(aBlock.dataset.anim)
            setTimeout(() => {
              aBlock.style.opacity = '0'
            },1000)
          })
        },
        afterChange: function (currentSlideEl,currenIndex) {
          document.querySelector(`.nav`).dataset.box = currentSlideEl.dataset.nav
          const items = document.querySelectorAll('.nav button')
          items.forEach(item => {
            item.classList.remove('white')
            item.classList.remove('black')
            item.classList.add(currentSlideEl.dataset.mode)
          })

          if(currentSlideEl.dataset.logo === 'white'){
            document.querySelector('.fixed-white').style.display = 'block'
            document.querySelector('.fixed-black').style.display = 'none'
          } else {
            document.querySelector('.fixed-white').style.display = 'none'
            document.querySelector('.fixed-black').style.display = 'block'
          }

          currentSlideEl.classList.add('active')
          const aBlocks = currentSlideEl.querySelectorAll('.animated')
          aBlocks.forEach(aBlock => {
            aBlock.classList.add(aBlock.dataset.anim)
            aBlock.style.opacity = '1'
          })

          if(currenIndex === 13){
            document.getElementById('descFooter').classList.add('footer-active')
          } else {
            document.getElementById('descFooter').classList.remove('footer-active')
          }
        }
      }
    }
  },
  methods:{
    coursorAction(e){
      this.coursorX = e.clientX
      this.coursorY = e.clientY
    },
    media(){
      this.winWidth = window.innerWidth
    },
    hideAnim(){
      const anims = document.querySelectorAll('.animated')
      anims.forEach(anim => anim.style.opacity = '0')
    },
    moveNext(){
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    }
  },
  mounted(){
    this.hideAnim()
    this.media()
    window.addEventListener('resize', e => {
      this.media()
    })
    setTimeout(()=>{
      this.$el.classList.add('active')
      document.querySelector('.fixed-white').classList.add('fixed-active')
      document.querySelector('.fixed-black').classList.add('fixed-active')
    }, 0);
  }
}
</script>
<style lang="scss" scoped>
@media(min-width: 992px) {
  .page-full {
    height: 100vh;
    section {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    .container {
      height: 100vh;
    }
  }
}
.coursor {
  position: fixed;
  pointer-events: none;
  z-index: 16;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: radial-gradient(170.62% 100% at 50% 0%, #F43155 0%, #F43155 36.46%, rgba(244, 49, 85, 0) 100%);
  filter: blur(8px);
  transform: translate(-50%, -50%);
  @media(max-width: 1199px) {
    display: none;
  }
}
.fixed{
  &-logo{
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 15;
    transition: 2s ease 2s;
    @media(min-width: 2000px) {
      width: 8vw;
    }
  }
}
</style>
<style lang="scss">
@media(min-width: 768px) {
  .page-full {
    .animated {
      opacity: 0;
    }
  }
}
</style>
