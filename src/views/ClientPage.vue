<template>
  <!-- A page where the client will be able to log in and /or Sign up -->
  <div>
    <section class="signup">
      <ClientSignupPage />
    </section>

    <section class="login">
      <ClientLoginPage />
    </section>
  </div>
</template>

<script>
import ClientSignupPage from "@/components/ClientSignupPage.vue";
import ClientLoginPage from "@/components/ClientLoginPage.vue";

export default {
  name: "ClientPage",
  components: {
    ClientSignupPage,
    ClientLoginPage,
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  width: 70vw;
  top: 5%;
  background-color: rgba(149, 149, 193, 0.392);
  border-radius: 10px;
}

.signup {
  margin-bottom: 7vh;
}

.login {
  margin-bottom: 8vh;
}

h1 {
  text-align: center;
}
</style>