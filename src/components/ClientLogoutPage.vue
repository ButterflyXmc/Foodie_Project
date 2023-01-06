<template>
  <div>
    <v-btn @click="logOut">Log Out</v-btn>
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
    logOut() {
      axios
        .request({
          url: " https://foodierest.ml/api/client",
          method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            //   add token
          },
        })
        .then(() => {
          // get the cookies
          // the delete the cookies
          cookies.get(`token`);
          cookies.remove(`token`);
          cookies.get(`clientId`);
          cookies.remove(`clientId`);
          // return them back to the discovery page
          this.msg = "You've been successfuly logged out!";
          router.push("/discover-page");
        })
        .catch((error) => {
          console.log(error);
          alert("An error has occured logging out! Please try again");
        });
    },
  },
};
</script>

<style scoped>
</style>