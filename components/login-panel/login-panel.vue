<template>
  <div class="login-form-container">
    <div class="login-column">
      <Label classes="login-label">Login</Label>
      <Label classes="email-input-label">Email</Label>
      <c-input
        input-type="mail"
        placeholder="example@email.com"
        :max-lenght="100"
        :classes="['login-input', 'email-input']"
        @changes="updateEmail"
      />
      <c-input
        input-type="password"
        placeholder="Secure password"
        :max-lenght="100"
        :classes="['login-input', 'email-input']"
        @changes="updatePassword"
      />
      <MF-Button size="m" button-font-size="m" @clicked="handleLogin">
        Log in
      </MF-Button>
      <p v-if="invalidCred" class="invalid-credentials">
        Invalid email or password.
      </p>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loginUser } from '~/utils/userUtils/login';

export default defineComponent({
  data() {
    return {
      email: '' as string,
      password: '' as string,
      invalidCred: false as boolean,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await loginUser(this.email, this.password);
        if (res == 200) this.$router.push('/');
      } catch (error: any) {
        this.invalidCred = true;
        console.log(error.message);
      }
    },
    updateEmail(text: string) {
      this.invalidCred = false;
      this.email = text;
    },
    updatePassword(text: string) {
      this.invalidCred = false;
      this.password = text;
    },
  },
});
</script>

<style lang="scss" src="./styles.scss"></style>
