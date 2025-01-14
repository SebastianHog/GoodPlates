<template>
  <div class="default-layout-container">
    <div style="height: 100%">
      <div class="sidebar">
        <div class="logoTitleImage">
          <img
            src="@/assets/logo/GoodPlatesLogo.svg"
            alt="goodplates logo"
            class="logo-img"
          />
          <h1 class="logoTitle">GoodPlates</h1>
        </div>
        <div class="seperator"></div>
      </div>
    </div>
    <div style="flex: 1">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<style scoped src="./default_styles.scss" lang="scss"></style>
