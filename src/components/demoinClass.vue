<template>
  <v-container>
    <!-- two way binding : v-model and specify the variable name that you want to bind to -->
    <!-- whatever the user types in the text field, it'll tie to the username value  -->
    <!-- ------------------------------------------------------------- -->
    <p>Email</p>
    <v-text-field v-model="email" />
    <p>Username</p>
    <v-text-field v-model="username" />
    <p>First Name</p>
    <v-text-field v-model="firstName" />
    <p>Last Name</p>
    <v-text-field v-model="lastName" />
    <p>Password</p>
    <v-text-field v-model="password" />

    <v-btn @click="signUp">Sign up</v-btn>

    <!-- =================================== -->
  </v-container>
</template>

<script>
import axios from "axios";
import router from "vue-router";

export default {
  Name: "ClientSignupPage",

  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      // apiUrl: process.env.VUE_APP_API_URL,
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },
  methods: {
    apiCall() {
      router.push("/dicover-page");
    },
    signUp() {
      axios
        .request({
          method: "POST",
          url: "https://foodierest.ml/#/docs/client",
          data: {
            email: this.email,
            username: this.username,
            firstname: this.firstName,
            lastname: this.lastName,
            password: this.password,
          },
          headers: {
            apiKey: process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
};
</script>
