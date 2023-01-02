<template>
  <div>
    <h2>Restaurant Sign Up Page</h2>
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="name" label="Restaurant Name"></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="address" label="Restaurant Address">
        </v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="password" label="Password"></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="restSignup">Sign Up</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "RestSignupPage",
  data() {
    return {
      name: "",
      address: "",
      email: "",
      password: "",
    };
  },
  methods: {
    restSignup() {
      axios
        .request({
          url: "https://foodierest.ml/#/docs/restaurant",
          // https://foodierest.ml/api/restaurant
          method: "POST",
          headers: {
            "x-api-key": this.apiKey,
          },
          data: {
            name: this.name,
            address: this.address,
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          router.push("/discover-page");
          cookies.set(`restaurantId`, response.data.restaurantId);
          cookies.set(`token`, response.data.token);
        })
        .catch(() => {
          // this alert will pop up if signup fails
          alert("Sign up failed, try again");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>