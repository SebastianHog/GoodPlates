<template>
  <header class="header-main">
    <NuxtLink to="/create_recipe">
      <MF-Button size="s" class="add-recipe-btn">Add Recipe</MF-Button>
    </NuxtLink>
    <NuxtLink to="/login">
      <MF-Button size="s" class="add-recipe-btn">Login</MF-Button>
    </NuxtLink>
    <user-icon />
  </header>
</template>

<style src="./styles.scss" lang="scss"></style>
