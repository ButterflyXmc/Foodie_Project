<template>
  <div>
    <v-btn @click="deleteAcct">Delete Account</v-btn>
  </div>
</template>

<script>
import axios from "axios";
// import router from "@/router";
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
          url: " https://foodierest.ml/api/client",
          method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            //   add token
            // token: "",
          },
        })
        .then(() => {
          // get the cookies
          // the delete the cookies
          // this.token = cookies.get(`token`);
          cookies.remove(`token`);
          cookies.remove(`clientId`);
          // return them back to the discovery page
          this.msg = "Your account has been successfully deleted!";
          // router.push("/discover-page");
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