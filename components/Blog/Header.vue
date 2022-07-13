<template>
  <header class="header-blog">
    <div class="container">
      <button>
        <a href="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12L1.5 12M1.5 12C3.36589 12 7.5 13.5 7.5 17.5M1.5 12C3.36589 12 7.5 10.5 7.5 6.5" stroke="#332F2D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Back
        </a>
      </button>
      <img src="@/assets/img/blog/logo.png">
      <h1>Blog</h1>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header-blog {
  @media(min-width: 768px) {
    padding-top: 22px;
    padding-bottom: 40px;
  }
}
.container {
  position: relative;
  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
h1 {
  font-family: Queens Condensed;
  font-weight: 500;
  font-size: 90px;
  line-height: 90%;
  color: #332F2D;
}
button {
  position: absolute;
  top: -22px;
  font-family: Queens Condensed;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  text-transform: capitalize;
  color: #332F2D;
  background: none;
  border: none;
  padding: 0;
  a {
    color: #332F2D;
    text-decoration: none;
  }
  @media(min-width: 768px) {
    left: 15px;
  }
  @media(min-width: 992px) {
    left: 30px;
  }
  @media(min-width: 1200px) {
    left: 60px;
  }
  @media(max-width: 767px) {
    display: none;
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
  margin-bottom: 30px;
  @media(min-width: 768px) {
    order: 2;
    margin-bottom: 0;
  }
}
</style>
