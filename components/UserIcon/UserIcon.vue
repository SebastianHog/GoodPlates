<template>
  <div>
    <div class="user-icon-base">
      <img src="../../assets/icons/user-icon.svg" alt="" />
    </div>
    <div class="user-options">
      <NuxtLink to="/me" class="user-dropdown-option">Profile</NuxtLink>
      <NuxtLink to="/user_recipes" class="user-dropdown-option"
        >My recipes</NuxtLink
      >
      <NuxtLink to="/saved" class="user-dropdown-option">Saved</NuxtLink>
      <NuxtLink to="/settings" class="user-dropdown-option">Settings</NuxtLink>
    </div>
  </div>
</template>

<style src="./styles.scss" lang="scss"></style>
