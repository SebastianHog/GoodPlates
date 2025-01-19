<template>
  <div class="login-form-container">
    <div class="login-column">
      <div class="email-section">
        <Label classes="login-label">Login</Label>
        <c-input
          placeholder="example@email.com"
          :maxlength="100"
          :classes="['login-input', 'email-input']"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" src="./styles.scss"></style>
