<template>
  <div class="loader"></div>
</template>
<style lang="scss" scoped>
.loader{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, .2);
  &:before{
    content:"";
    width: 140px;
    height: 140px;
    border-radius: 50%;
    animation: 1s linear infinite loaderAnimation;
  }
}
@keyframes loaderAnimation{
  25%{background-color: #F43155}
  50%{background-color: #FF7403}
  75%{background-color: #50D39E}
  0%, 100%{background-color: #F7F116}
}
</style>