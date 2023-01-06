<template>
  <div>
    <h1>Resto Page</h1>
    <section class="signup">
      <RestSignupPage />
    </section>

    <section class="login">
      <RestLoginPage />
    </section>
  </div>
</template>

<script>
import RestSignupPage from "@/components/RestSignupPage.vue";
import RestLoginPage from "@/components/RestLoginPage.vue";

export default {
  name: "RestoPage",
  components: {
    RestSignupPage,
    RestLoginPage,
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-left: 8vw;
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