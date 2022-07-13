<template>
  <main class="layout layout-default">
    <NavMob v-if="winWidth < 991.9" />
    <Nuxt />
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
