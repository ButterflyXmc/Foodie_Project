<template>
  <div>
    <v-btn @click="restLogout">Log Out</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "ClientLogoutPage",
  methods: {
    restLogout() {
      axios
        .request({
          url: "  https://foodierest.ml/api/restaurant-login",
          method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          cookies.get(`token`);
          cookies.remove(`token`, response.data.token);
          cookies.remove(`restaurantId`, response.data.restaurantId);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "An error has occured logging out of your account! Please try again"
          );
        });
    },
  },
};
</script>

<style scoped>
</style>