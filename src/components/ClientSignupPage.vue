<template>
  <div>
    <h2>Sign Up</h2>
    <!-- SIGN UP FORM -->
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="userName" label="Username"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="firstName" label="First Name"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="lastName" label="Last Name"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="password" label="Password"></v-text-field>
      </v-col>
    </v-row>
    <!-- Sign up button -->
    <v-btn @click="clientSignup">Sign Up</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "ClientSignupPage",
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },
  methods: {
    clientSignup() {
      axios
        .request({
          url: "https://foodierest.ml/#/docs/client",
          method: "POST",
          headers: {
            "x-api-key": this.apiKey,
          },
          data: {
            email: this.email,
            username: this.username,
            firstname: this.firstName,
            lastname: this.lastName,
            password: this.password,
          },
        })
        .then((response) => {
          // sending the user to discover page with the path
          router.push("/discover-page");
          //setting cookies (10)
          cookies.set(`clientId`, response.data.clientId);
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