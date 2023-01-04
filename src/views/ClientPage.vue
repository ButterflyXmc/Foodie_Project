<template>
  <div>
    <!-- ADD SIGNUP and LOGIN comps for the clients -->
    <ClientSignupPage />
  </div>
</template>

<script>
import ClientSignupPage from "@/components/ClientSignupPage.vue";

export default {
  name: "ClientPage",
  components: {
    ClientSignupPage,
  },
};
</script>

<style lang="scss" scoped>
</style>