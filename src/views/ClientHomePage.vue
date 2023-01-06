<template>
  <div>
    <h1>client-homepage</h1>
    <ClientLogoutPage />
    <ClientDeletePage />
  </div>
</template>

<script>
import ClientLogoutPage from "@/components/ClientLogoutPage.vue";
import ClientDeletePage from "@/components/ClientDeletePage.vue";

export default {
  name: "ClientHomePage",
  components: {
    ClientLogoutPage,
    ClientDeletePage,
  },
};
</script>

<style scoped>
</style>