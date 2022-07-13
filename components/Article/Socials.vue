<template>
  <div class="socials">
    <h4>share:</h4>
    <div class="socials-icons">
      <ShareNetwork
        v-for="(network, index) in networks"
        :network="network.network"
        :key="index"
        :style="{backgroundColor: network.color}"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :quote="sharing.quote"
        :hashtags="sharing.hashtags"
        :twitterUser="sharing.twitterUser">
        <i :class="network.icon"></i>
      </ShareNetwork>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        }
      ]
    }
  },
  data() {
    return {
      article: {},
      tags: [],
      prev: null,
      next: null,
      sharing: {
        url: window.location.href,
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'zemna'
      },
      networks: [
        { network: 'linkedin', icon:'fab fa-linkedin-in'},
        { network: 'twitter', icon: 'fab fa-twitter'},
        { network: 'facebook', icon: 'fab fa-facebook-f'}
      ],
    }
  },
  async fetch () { // Change asyncData() to fetch() to access 'this' inside function
    this.article = await this.$content('articles', this.$route.params.slug).fetch()
    this.tags = []
    if (this.article.tags) {
      const tagsList = await this.$content('tags')
        .only(['name', 'slug'])
        .where({ slug: { $containsAny: this.article.tags } })
        .fetch()
      this.tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    }
    [this.prev, this.next] = await this.$content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(this.$route.params.slug)
      .fetch()
  },
  watch: {
    article: function (val) {
      this.sharing.title = this.article.title
      this.sharing.description = this.article.description
      this.sharing.hashtags = this.article.tags.toString()
    }
  },
}
</script>
<style lang="scss" scoped>
.socials {
  text-align: center;
  @media (max-width: 991.9px) {
    margin-top: 60px;
    padding: 24px 0;
    border-bottom: 1.5px solid #ADACAB;
    border-top: 1.5px solid #ADACAB;
  }
  h4 {
    font-family: 'ABC Favorit Extended';
    font-size: 14px;
    font-weight: 350;
    line-height: 1;
    color: #706C68;
    text-transform: uppercase;
    margin-right:16px;
    @media (min-width: 992px) {
      margin-bottom: 16px;
      margin-right:0;
    }
  }
  a {
    display: inline-block;
    color: #706C68;
    border: 1px solid #706C68;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 12px 10px;
    margin: 0 6px;
    @media (min-width: 992px) {
      margin: 6px 0;
    }
    &:hover {
      transform: scale3d(1.1,1.1,1.1);
      color: #81807d;
    }
    &:active {
      transform: scale3d(1.1,1.1,1.1);
      color: #81807d;
    }
  }
  &-icons {
    @media (min-width: 992px) {
      display: flex;
      flex-direction: column;
    }
  }
  i {
    transform: scale(1.5);
  }
}
</style>
