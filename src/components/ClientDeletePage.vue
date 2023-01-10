<template>
  <div>
    <v-btn @click="deleteAcct">Delete Account</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "ClientDeletePage",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    deleteAcct() {
      axios
        .request({
          url: " https://foodierest.ml/api/client-login",
          method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          cookies.get(`token`);
          cookies.remove(`token`, response.data.token);
          cookies.remove(`clientId`, response.data.clientId);
          // return them back to the discovery page
          this.msg = "Your account has been successfully deleted!";
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "An error has occured deleteing your account! Please try again"
          );
        });
    },
  },
};
</script>

<style scoped>
</style>