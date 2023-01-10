<template>
  <div>
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
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  width: 70vw;
  top: 5%;
  background-color: rgba(121, 93, 149, 0.392);
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