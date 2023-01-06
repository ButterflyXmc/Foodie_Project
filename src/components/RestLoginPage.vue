<template>
  <div>
    <h2>Log In</h2>
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="password" label="Password"></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="restLogin">Log In</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "RestLoginPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    restLogin() {
      axios
        .request({
          url: "  https://foodierest.ml/api/restaurant-login",
          method: "POST",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          // sending the user to discover page with the path
          router.push("/discover-page");
          cookies.set(`restaurantId`, response.data.restaurantId);
          cookies.set(`token`, response.data.token);
        })
        .catch(() => {
          // this alert will pop up if login fails
          alert("Log In failed, try again");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>