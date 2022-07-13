<template>
  <section class="about">
    <div class="container">
      <h2 class="animated del-0" data-anim="fadeInUp">About <br> 021</h2>
      <div class="about-block">
        <div class="about-media">
          <svg width="524" height="524" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M522 166V162C522 105.995 522 77.9921 511.101 56.6009C501.513 37.7847 486.215 22.4867 467.399 12.8993C446.008 2 418.005 2 362 2H358.5" stroke="url(#paint0_radial_1098_2106J)" stroke-width="4" /><path d="M338 22H420C421.857 22 422.785 22 423.571 22.0154C466.523 22.8589 501.141 57.4767 501.985 100.429C502 101.215 502 102.143 502 104V104V186" stroke="url(#paint1_radial_1098_2106J)" stroke-width="4" /><path d="M2 358V362C2 418.005 2 446.008 12.8993 467.399C22.4867 486.215 37.7847 501.513 56.6009 511.101C77.9921 522 105.995 522 162 522H165.5" stroke="url(#paint2_radial_1098_2106J)" stroke-width="4" /><path d="M186 502H104C102.143 502 101.215 502 100.429 501.985C57.4767 501.141 22.8589 466.523 22.0154 423.571C22 422.785 22 421.857 22 420V420V338" stroke="url(#paint3_radial_1098_2106J)" stroke-width="4" /><defs><radialGradient id="paint0_radial_1098_2106J" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(499.569 23) rotate(134.61) scale(200.871 200.864)"><stop stop-color="#F43155" /><stop offset="0.634306" stop-color="#332F2D" /></radialGradient><radialGradient id="paint1_radial_1098_2106J" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(479.5 43) rotate(134.698) scale(201.175)"><stop stop-color="#F43155" /><stop offset="0.634306" stop-color="#332F2D" /></radialGradient><radialGradient id="paint2_radial_1098_2106J" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.4314 501) rotate(-45.3896) scale(200.871 200.864)"><stop stop-color="#F43155" /><stop offset="0.634306" stop-color="#332F2D" /></radialGradient><radialGradient id="paint3_radial_1098_2106J" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.5 481) rotate(-45.3021) scale(201.175)"><stop stop-color="#F43155" /><stop offset="0.634306" stop-color="#332F2D" /></radialGradient></defs></svg>
          <img src="@/assets/img/home/Brandon.png">
        </div>
        <div class="about-text about-text--james">
          <div class="title-wrap">
            <svg class="animated del-50" data-anim="fadeInUp" width="80" height="89" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 66.2657V84.6936H66.8571V66.2657C53.7434 66.2657 43.0921 55.3699 43.0348 42.2318C43.0921 29.0649 53.7434 18.4279 66.8571 18.4279V0H0V18.4279C13.1137 18.4279 23.7651 29.0649 23.8223 42.2318C23.7651 55.3699 13.1137 66.2657 0 66.2657Z" fill="url(#paint0_radial_1229_4433)" /><defs><radialGradient id="paint0_radial_1229_4433" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.4286) rotate(90) scale(69.2966 79.9626)"><stop stop-color="#FF7403" /><stop offset="0.390625" stop-color="#FF7403" /><stop offset="1" stop-color="#332F2D" /></radialGradient></defs></svg>
            <h3 class="animated del-30" data-anim="fadeInUp">Brandon Ham</h3>
          </div>
          <p class="animated del-55" data-anim="fadeInUp">Brandon learned the art (and science) of conversion-based copy while working for a billion dollar publishing company. His primary responsibility was the online customer acquisition for a 100 million dollar a year franchise.</p><br><br>
          <p class="animated del-60" data-anim="fadeInUp">While there he bridged the gap between traffic and words resulting in multiple million dollar campaigns. When Brandon founded 021 he used this experience to hire and train copywriters on what works today.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about {
  background: #332F2D;
  z-index: 1;
  .container {
    position: relative;
  }
  &-block {
    @media(min-width: 1200px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &:nth-child(even) .about-media {
      order: 1;
    }
  }
  &-media {
    position: relative;
    max-width: 100%;
    margin-bottom: 67px;
    width: 520px;
    @media(min-width: 1200px) {
      margin-bottom: 0;
    }
    @media(min-width:2000px) {
      width: 27vw;
    }
    img {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 80px);
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    path {
      opacity: 0;
      &:nth-child(1),
      &:nth-child(2) {
        transform: translate(-60px, 60px);
        animation: 2s ease-in-out svgPathTop infinite;
      }
      &:nth-child(3),
      &:nth-child(4) {
        transform: translate(60px, -60px);
        animation: 2s ease-in-out svgPathBottom infinite;
      }
    }
    @keyframes svgPathTop {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translate(0%, 0%);
        opacity: 0;
      }
    }
    @keyframes svgPathBottom {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translate(0%, 0%);
        opacity: 0;
      }
    }
  }
  &-text {
    @media(min-width: 1200px) {
      padding-top: 120px;
      min-width: 441px;
      margin-right: 80px;
      &--james {
        padding-top: 265px;
        padding-bottom: 30px;
      }
    }
  }
  h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    line-height: 1;
    font-size: 110px;
    margin-bottom: 50px;
    color: #DDD9D2;
    @media (min-width: 1200px) {
      font-size: 140px;
      width: 520px;
      margin-bottom: -175px;
    }
    @media(min-width:2000px) {
      font-size: 7vw;
    }
  }
  .title-wrap {
    position: relative;
    svg {
      position: absolute;
      bottom: 0;
      width: 80px;
      height: 89px;
      left: 0;
      transform: translate(-50%, -50%);
      @media(min-width: 2000px) {
        width: 4vw;
        height: auto;
        left: -1vw;
        top: -2vw;
      }
    }
    h3 {
      font-family: 'Queens Condensed';
      font-weight: 500;
      font-size: 52px;
      line-height: 1;
      color: #DDD9D2;
      position: relative;
      margin-bottom: 17px;
      margin-left: 16px;
      z-index: 2;
      @media(min-width: 2000px) {
        font-size: 2.7vw;
      }
    }
  }
  p {
    color: #DDD9D2;
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    line-height: 1.5;
    font-size: 14px;
    @media (min-width: 1200px) {
      width: 408px;
    }
    @media(min-width:2000px) {
      font-size: 1vw;
      width: 27vw;
    }
  }
}
.about-media {
  transition: 1s ease;
  transform: scale(1.2);
  opacity: 0 !important;
}
.active {
  .about {
    .about-media {
      transition: 1s ease;
      transform: scale(1);
      opacity: 1 !important;
      transition-delay: 0.3s;
    }
  }
}
</style>
