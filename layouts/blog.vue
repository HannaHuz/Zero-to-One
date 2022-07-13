<template>
  <main class="layout layout-blog">
    <NavMob v-if="winWidth < 768" />
    <Header />
    <Nuxt />
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
