<template>
  <section id="process" class="process">
    <div class="container">
      <h2>Our Winning Process</h2>
      <div class="process-mob">
        <div class="process-row">
          <div class="process-block" v-for="(slide, index) in slides">
            <div class="process-num">0{{ ++index }}</div>
            <h6>{{ slide.title }}</h6>
            <p v-if="slide.text">{{ slide.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      slides: [
        {
          title: 'Research',
          text: 'The first step in our process begins with you filling out a deep dive questionnaire. This helps our team understand the important information that only you and your team know. While that is happening, our research team is scouring your competitors for any insights or advantages that they’ve discovered'
        },
        {
          title: 'Analysis',
          text: 'After the research process is finished, all the information we gather is taken to the creative and copy team. There they will sit down and brainstorm advertising angles and ideas that have the greatest chance of success.'
        },
        {
          title: 'Presentation',
          text: 'Once the advertising angles and ideas are compiled, we present a research deck to you and your team for feedback. This extra layer of approval helps us get even more important information from you that might come up after the research process is finished.'
        },
        {
          title: 'Writing',
          text: 'After you and your team approve the angles, our writers get to work. From here they will craft your copy based on the angles you approved of and then submit them for an intensive internal review. This review is conducted by multiple writers as well as other members of our team.'
        },
        {
          title: 'Review',
          text: 'Once the internal quality control process is done, it’s time for you to review. This is where you make sure everything is on-brand and inline with the agreed-upon angles. Any of your requested changes are fulfilled in this stage.'
        },
        {
          title: 'Development & Design (Optional)',
          text: 'If needed, this is the stage where your design and development work is completed and presented for your approval.'
        },
        {
          title: 'Testing',
          text: 'Now it’s go time. You test your new copy with your media buying team and give feedback to us on the performance. Based on the initial testing, new rounds of tweaks are made to your copy to optimize performance and maximize your return on investment. '
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  background: #332F2D;
  position: relative;
  overflow: hidden;
  padding: 45px 0 60px;
  @media(min-width: 768px) {
    padding: 100px 0 183px;
  }
  .container {
    position: relative;
    z-index: 2;
  }
  &-row {
    position: relative;
    &:before {
      content: "";
      height: 64px;
      width: 36px;
      display: block;
      position: absolute;
      top: 0;
      left: -3px;
      transform: translateY(-100%);
      background: url('@/assets/img/home/pr-arrow.png') no-repeat 0 0/100% 100%;
    }
  }
  &-block {
    position: relative;
    padding-left: 45px;
    padding-top: 63px;
    &:before {
      content: "";
      position: absolute;
      background: #332F2D;
      border: 2px solid #918C3D;
      top: 90px;
      left: 15px;
      z-index: 2;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transform: translateX(-50%);
    }
    &:after {
      content: "";
      background: #918C3D;
      position: absolute;
      z-index: 1;
      @media(max-width: 1200px) {
        left: 15px;
        top: 0;
        height: 100%;
        width: 1.5px;
        transform: translateX(-50%);
      }
    }
    &:first-child {
      padding-top: 0;
      h3 {
        margin-top: 24px;
      }
      &:before {
        @media(max-width: 991px) {
          top: 25px;
        }
      }
    }
    &:last-child {
      &:after {
        @media(max-width: 1200px) {
          height: 260px;
          background: linear-gradient( 202deg , #918C3D, transparent);
        }
      }
    }
  }
  &-num {
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
  }
  h2 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 90px;
    line-height: 1;
    margin-bottom: 90px;
    color: #DDD9D2;
    @media (min-width: 768px) {
      font-size: 110px;
      width: 455px;
      margin-bottom: 64px;
    }
  }
  h3 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 22px;
    line-height: 1;
    margin-bottom: 8px;
    color: #DDD9D2;
    @media (min-width: 768px) {
      font-size: 20px;
      letter-spacing: 0.03em;
    }
  }
  h6 {
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 40px;
    line-height: 1;
    margin-bottom: 8px;
    color: #DDD9D2;
    position: relative;
    @media (min-width: 768px) {
      width: 438px;
      font-size: 58px;
      margin-bottom: 18px;
    }
    &:before {
      content: "";
      transition: width 1s ease-in-out;
      background: #332F2D;
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: calc(100% + 4px);
      transform: translate(-2px, -2px);
    }
  }
  p {
    font-family: 'ABC Favorit Extended';
    font-weight: 350;
    font-size: 15px;
    line-height: 1.5;
    color: #ADACAB;
    position: relative;
    @media (min-width: 768px) {
      font-size: 14px;
      width: 80%;
    }
    &:before {
      content: "";
      transition: width .5s ease-in-out .5s;
      background: #332F2D;
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: calc(100% + 4px);
      transform: translate(-2px, -2px);
    }
  }
}
</style>
