<template>
  <footer class="footer" id="descFooter">
    <div class="container">
      <div class="footer-row">
        <ul>
          <li><a href="#" @click="idModal = 'subscribe'">Newsletter</a></li>
          <li><a href="/privacy" target="_blank">Privacy policy</a></li>
          <li><a href="/terms" target="_blank">Terms & Conditions</a></li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/021.inc" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" fill="url(#paint0_radial_1671_3464)" /><defs><radialGradient id="paint0_radial_1671_3464" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10) rotate(90) scale(20 34.1235)"><stop stop-color="white" /><stop offset="0.333333" stop-color="white" /><stop offset="1" stop-color="#5C5C5C" /></radialGradient></defs></svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/021.inc/" target="_blank">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6152 1.80723C13.2658 1.80723 13.6273 1.80723 14.7116 1.80723C15.6755 1.80723 16.1574 2.04819 16.5189 2.16868C17.0008 2.40964 17.3622 2.53012 17.7237 2.89157C18.0851 3.25301 18.3261 3.61446 18.4466 4.09639C18.567 4.45783 18.6875 4.93976 18.808 5.90362C18.808 6.98795 18.808 7.22892 18.808 10C18.808 12.7711 18.808 13.0121 18.808 14.0964C18.808 15.0602 18.567 15.5422 18.4466 15.9036C18.2056 16.3855 18.0851 16.747 17.7237 17.1084C17.3622 17.4699 17.0008 17.7108 16.5189 17.8313C16.1574 17.9518 15.6755 18.0723 14.7116 18.1928C13.6273 18.1928 13.3863 18.1928 10.6152 18.1928C7.84415 18.1928 7.60319 18.1928 6.51885 18.1928C5.55499 18.1928 5.07307 17.9518 4.71162 17.8313C4.22969 17.5904 3.86825 17.4699 3.5068 17.1084C3.14536 16.747 2.90439 16.3855 2.78391 15.9036C2.66343 15.5422 2.54295 15.0602 2.42246 14.0964C2.42246 13.0121 2.42246 12.7711 2.42246 10C2.42246 7.22892 2.42246 6.98795 2.42246 5.90362C2.42246 4.93976 2.66343 4.45783 2.78391 4.09639C3.02487 3.61446 3.14536 3.25301 3.5068 2.89157C3.86825 2.53012 4.22969 2.28916 4.71162 2.16868C5.07307 2.04819 5.55499 1.92771 6.51885 1.80723C7.60319 1.80723 7.96463 1.80723 10.6152 1.80723ZM10.6152 0C7.84415 0 7.60319 0 6.51885 0C5.43451 0 4.71162 0.240965 4.10921 0.481928C3.5068 0.722892 2.90439 1.08434 2.30198 1.68675C1.69957 2.28916 1.45861 2.77109 1.09716 3.49398C0.856199 4.09639 0.735716 4.81928 0.615234 5.90362C0.615234 6.98795 0.615234 7.3494 0.615234 10C0.615234 12.7711 0.615234 13.0121 0.615234 14.0964C0.615234 15.1807 0.856199 15.9036 1.09716 16.506C1.33813 17.1084 1.69957 17.7108 2.30198 18.3133C2.90439 18.9157 3.38632 19.1566 4.10921 19.5181C4.71162 19.759 5.43451 19.8795 6.51885 20C7.60319 20 7.96463 20 10.6152 20C13.2658 20 13.6273 20 14.7116 20C15.796 20 16.5189 19.759 17.1213 19.5181C17.7237 19.2771 18.3261 18.9157 18.9285 18.3133C19.5309 17.7108 19.7719 17.2289 20.1333 16.506C20.3743 15.9036 20.4948 15.1807 20.6152 14.0964C20.6152 13.0121 20.6152 12.6506 20.6152 10C20.6152 7.3494 20.6152 6.98795 20.6152 5.90362C20.6152 4.81928 20.3743 4.09639 20.1333 3.49398C19.8923 2.89157 19.5309 2.28916 18.9285 1.68675C18.3261 1.08434 17.8442 0.843374 17.1213 0.481928C16.5189 0.240965 15.796 0.120482 14.7116 0C13.6273 0 13.3863 0 10.6152 0Z" fill="url(#paint0_radial_1671_3466)" /><path d="M10.6152 4.81928C7.72367 4.81928 5.43451 7.10843 5.43451 10C5.43451 12.8916 7.72367 15.1807 10.6152 15.1807C13.5068 15.1807 15.796 12.8916 15.796 10C15.796 7.10843 13.5068 4.81928 10.6152 4.81928ZM10.6152 13.3735C8.80801 13.3735 7.24174 11.9277 7.24174 10C7.24174 8.19277 8.68752 6.62651 10.6152 6.62651C12.4225 6.62651 13.9887 8.07229 13.9887 10C13.9887 11.8072 12.4225 13.3735 10.6152 13.3735Z" fill="url(#paint1_radial_1671_3466)" /><path d="M15.9164 5.90362C16.5818 5.90362 17.1213 5.3642 17.1213 4.6988C17.1213 4.03339 16.5818 3.49398 15.9164 3.49398C15.251 3.49398 14.7116 4.03339 14.7116 4.6988C14.7116 5.3642 15.251 5.90362 15.9164 5.90362Z" fill="url(#paint2_radial_1671_3466)" /><defs><radialGradient id="paint0_radial_1671_3466" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.6152) rotate(90) scale(20 34.1235)"><stop stop-color="white" /><stop offset="0.333333" stop-color="white" /><stop offset="1" stop-color="#5C5C5C" /></radialGradient><radialGradient id="paint1_radial_1671_3466" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.6152) rotate(90) scale(20 34.1235)"><stop stop-color="white" /><stop offset="0.333333" stop-color="white" /><stop offset="1" stop-color="#5C5C5C" /></radialGradient><radialGradient id="paint2_radial_1671_3466" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.6152) rotate(90) scale(20 34.1235)"><stop stop-color="white" /><stop offset="0.333333" stop-color="white" /><stop offset="1" stop-color="#5C5C5C" /></radialGradient></defs></svg>
            </a>
          </li>
        </ul>
        <div class="footer-copyrights">© 021 CREATIVE STUDIO <span id="year"></span></div>
      </div>
    </div>
    <Modal v-if="idModal" :modal_id="idModal" />
  </footer>
</template>
<script>
export default {
  data() {
    return {
      idModal: false
    }
  },
  methods: {
    currentDate() {
      const date = new Date(),
        currentDate = date.getFullYear();
      document.getElementById('year').innerHTML = currentDate;
    }
  },
  mounted() {
    this.currentDate()
  }
}
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #332f2d;
  padding: 40px 0 30px;
  opacity: 0;
  display: none;
  transition: 1s ease;
  @media (min-width: 768px) {
    padding: 60px 0;
  }
  &-active {
    opacity: 1;
    display: block;
  }
  &-row {
    @media (min-width: 992px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    @media (min-width: 2000px) {
      justify-content: space-between;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      &:nth-child(2) {
        margin: 40px 0 30px;
        border-bottom: 1.5px solid #706C68;
        padding-bottom: 30px;
        @media (min-width: 992px) {
          border: none;
          margin: 0 50px;
          padding-bottom: 0;
        }
      }
      li {
        font-family: 'Queens Condensed';
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        margin: 0 10px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        a {
          text-decoration: none;
          color: #DDD9D2;
          transition: 0.3s ease-in;
          svg {
            @media (min-width: 2000px) {
              width: 1.5vw;
              height: auto;
            }
          }
          &:hover {
            color: #706C68;
            svg {
              transform: scale3d(1.1, 1.1, 1.1);
            }
          }
        }
        @media (min-width: 2000px) {
          font-size: 1.5vw;
        }
      }
    }
  }
  &-copyrights {
    font-family: 'ABC Favorit Extended';
    font-size: 14px;
    line-height: 19px;
    font-weight: 350;
    letter-spacing: -0.04em;
    text-align: left;
    color: #706C68;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 21px;
    }
    @media (min-width: 2000px) {
      font-size: 1.3vw;
    }
  }
}
.layout-blog,
.layout-article {
  .footer {
    &-row {
      justify-content: space-between;
    }
  }
}
</style>
