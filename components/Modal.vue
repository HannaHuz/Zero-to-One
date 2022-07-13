<template>
  <div class="modal">
    <style>html {
      overflow-y: hidden;
    }
    @media (min-width: 768px) {
      html {
        margin-right: 17px;
      }
    }
    @media (min-width: 992px) {
      html {
        margin-right: -30px;
        overflow-x: hidden;
      }
    }
    </style>
    <div class="modal-wrap" @click="closeModal"></div>
    <div class="modal-container" :class="(modalActive) ? 'modal-container--active':''">
      <button class="modal-close" @click="closeModal">+</button>
      <BlogSubscribe/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalActive: false,
    }
  },
  props: ['modal_id'],
  methods: {
    closeModal(e) {
      e.preventDefault()
      this.modalActive = false;
      setTimeout(() => {
        this.$parent.idModal = false;
      }, 500);
    }
  },
  mounted() {
    if (this.modal_id) {
      setTimeout(() => {
        this.modalActive = true;
      }, 0);
    }
  }
}
</script>
<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 30px 15px;
  overflow-y: auto;
  background: rgba(0, 0, 0, .75);
  z-index: 16;
  @media(min-width: 768px) {
    padding: 60px 15px;
  }
  @media(min-width: 992px) {
    position: absolute;
    transform: translate(0, -84%);
    height: 120vh;
    padding: 250px 15px;
  }
  &-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    transition: background .3s ease;
    &:hover {
      background: rgba(255, 255, 255, .05);
    }
  }
  &-container {
    background: transparent;
    max-width: 100%;
    width: 1000px;
    padding: 60px 15px 30px 15px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    transform: translate(0, 50%);
    opacity: 0;
    transition: 1s ease-in-out;
    &--active {
      transform: translate(0, 0%);
      opacity: 1;
    }
  }
  &-close {
    color: #DDD9D2;
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    padding: 0;
    font-size: 40px;
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    &:hover {
      opacity: .7;
      cursor: pointer;
    }
  }
}
.page {
  &-index {
    .banner {
      .modal {
        html {
          overflow-y: hidden;
        }
        html {
          @media (min-width: 768px) {
            margin-right:0;
          }
        }
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        padding: 30px 15px;
        overflow-y: auto;
        background: rgba(0, 0, 0, .75);
        z-index: 16;
        @media(min-width: 768px) {
          padding: 60px 15px;
        }
        @media(min-width: 992px) {
          height: 100vh;
          padding: 80px 15px;
          transform: translate(0,0);
        }
      }
    }
  }
}
.layout-blog, .layout-article {
  .footer {
    .modal {
      @media(min-width: 992px) {
        transform: translate(0, 0);
        padding: 80px 15px;
      }
    }
  }
}

</style>
