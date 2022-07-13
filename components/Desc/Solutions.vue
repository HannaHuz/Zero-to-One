<template>
  <section class=" solutions" id="solutions">
    <div class="container">
      <div class="solutions-title">
        <svg class="animated del-40" data-anim="fadeInUp" width="75" height="88" viewBox="0 0 75 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2372 40.1183H25.9358C13.1684 43.5381 4.03663 52.4757 4.03663 62.965C4.03663 76.3857 19.0082 87.2774 37.4722 87.2774C55.9363 87.2774 70.9078 76.3857 70.9078 62.965C70.9078 52.4757 61.776 43.5381 49.0086 40.1183H54.4763C65.4402 40.0034 74.2857 31.0658 74.2857 20.0591C74.2857 9.05248 65.4402 0.0862141 54.4763 0H0.000282736V20.8063C-0.05697 31.4682 8.58818 40.1183 19.2372 40.1183Z" fill="url(#paint0_radial_1637_336)" /><defs><radialGradient id="paint0_radial_1637_336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37.1429) rotate(90) scale(81.6027 130.032)"><stop stop-color="#F7F116" /><stop offset="0.451421" stop-color="#EBE66B" /><stop offset="1" stop-color="#DDD9D2" /></radialGradient></defs></svg>
        <h2 class="animated del-0" data-anim="fadeInUp">What We Love <br>To Write (And Design)</h2>
      </div>
      <div class="solutions-row">
        <div class="solutions-right animated del-50" data-anim="fadeIn">
          <h5 class="animated del-55" data-anim="fadeInUp">High converting advertorials</h5>
          <ul class="animated del-60" data-anim="fadeInUp">
            <li> An advertorial is a combination of editorial and advertisement that gives the reader the feeling that they’re reading an online publication. It’s a way to persuade your prospects to buy without them feeling like they’re being sold to. While most prospects read a sales page with their guard up, an advertorial can make the customer feel like they discovered something unique without noticing they’re being sold to. That way, when they land on your sales page, video sales letter, or product page, they’re ready to convert. </li>
          </ul>
        </div>
        <div class="solutions-left animated del-60" data-anim="fadeIn">
          <h6 class="animated del-65" data-anim="fadeInUp">Email Flows</h6>
          <ul class="animated del-70" data-anim="fadeInUp">
            <li> Email flows are automated email sequences that are triggered by buyer behavior. They’re the workhorse that brings you higher average order values, repeat customers, and increased lifetime values. The great thing about email flows is you set them up once and they continue running in the background bringing you new customers and additional revenue on auto pilot. </li>
          </ul>
          <h6 class="animated del-80" data-anim="fadeInUp">Facebook Ads</h6>
          <ul class="animated del-85" data-anim="fadeInUp">
            <li>Facebook ads are a prospect's first impression of your brand. In order for your ads to fill the top of your funnel with eager prospects ready to buy, they must be persuasive and compliant. Since this is the first experience your prospect will have with your brand, how you position your message sets the stage for their experience with your company down the line. Great ads are how companies scale.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.solutions {
  &-title {
    position: relative;
    svg {
      z-index: -1;
      position: absolute;
      width: 74px;
      height: 87px;
      left: -20px;
      top: -50px;
      @media(min-width: 2000px) {
        width: 4vw;
        height: auto;
        left: -2vw;
        top: -2vw;
      }
    }
    h2 {
      font-family: 'Queens Condensed';
      font-weight: 500;
      font-size: 52px;
      line-height: 1;
      color: #332F2D;
      margin-bottom: 32px;
      @media(min-width: 1200px) {
        font-size: 90px;
        width: 764px;
        margin: 0 0 86px;
      }
      @media(min-width: 2000px) {
        font-size: 7vh;
        width: 100%;
      }
    }
  }
  h5 {
    font-family: 'Queens Condensed';
    color: #332F2D;
    text-transform: none;
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    margin-bottom: 15px;
    @media(min-width: 2000px) {
      font-size: 2vw;
    }
  }
  h6 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 20px;
    text-transform: capitalize;
    color: #332F2D;
    margin-bottom: 15px;
    line-height: 1;
    @media(min-width: 2000px) {
      font-size: 1.5vw;
    }
  }
  &-row {
    display: flex;
  }
  &-right,
  &-left {
    padding: 0 27px;
  }
  &-right {
    padding-left: 0;
    flex-basis: 50%;
    max-width: 50%;
  }
  &-left {
    border-top: none;
    border-left: 1.5px solid #ADACAB;
    height: 100%;
    flex-basis: 50%;
    max-width: 50%;
  }
  ul {
    padding: 0 0 0 20px;
    margin-bottom: 43px;
    &:last-child {
      margin-bottom: 0;
    }
    li {
      font-family: 'ABC Favorit Extended';
      font-weight: 350;
      line-height: 1.5;
      color: #332F2D;
      list-style: disc outside;
      font-size: 14px;
      @media(min-width: 2000px) {
        font-size: 1vw;
      }
    }
  }
}
</style>
