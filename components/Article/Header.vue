<template>
  <header>
    <div class="container">
      <button>
        <a href="/blog">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12L1.5 12M1.5 12C3.36589 12 7.5 13.5 7.5 17.5M1.5 12C3.36589 12 7.5 10.5 7.5 6.5" stroke="#332F2D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Back
        </a>
      </button>
      <img src="@/assets/img/blog/logo.png">
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  padding: 30px 0 0;
  @media(min-width: 768px) {
    padding: 60px 0 0;
    text-align: right;
  }
  .container {
    position: relative;
  }
  button {
    position: absolute;
    left: 80px;
    top: -22px;
    font-family: 'Queens Condensed';
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    text-transform: capitalize;
    color: #332F2D;
    background: none;
    border: none;
    padding: 0;
    @media(max-width: 767px) {
      display: none;
    }
    a {
      color: #332F2D;
      text-decoration: none;
    }
    svg {
      display: inline-block;
      vertical-align: middle;
      transition: .5s ease;
    }
    &:hover {
      svg {
        transform: translate(5px, 0);
      }
    }
  }
  img {
    margin-bottom: 32px;
    @media(min-width: 768px) {
      margin-bottom: 0;
    }
  }
}
</style>
