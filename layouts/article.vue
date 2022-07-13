<template>
  <main class="layout layout-article">
    <NavMob v-if="winWidth < 768" />
    <ArticleHeader/>
    <Nuxt />
    <BlogSubscribe/>
    <Footer />
  </main>
</template>
<script>
export default {
  data(){
    return {
      winWidth: null
    }
  },
  methods: {
    media(){
      this.winWidth = window.innerWidth
    }
  },
  mounted(){
    this.media()
    window.onresize = () => this.media()
  }
}
</script>
