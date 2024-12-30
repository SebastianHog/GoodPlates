<template>
  <div class="default-layout-container">
    <div class="sidebar">
      <img src="@/assets/logo/GoodPlatesLogo.png" alt="goodplates logo" class="logo-img" />
    </div>
    <Nuxt />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 400;
}

body {
  background-color: #ACFFA2;
}

.default-layout-container {
  display: flex;
  flex-direction: row;
}

.sidebar {
  background: rgba(0, 0, 0, 0.03);
  width: 15rem;
  height: 100vh;

  display: flex;
  justify-content: center;

  .logo-img {
    margin-top: 2rem;
    width: 10rem;
    height: 10rem;

  }
}
</style>
