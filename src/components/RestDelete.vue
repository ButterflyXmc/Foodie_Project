<template>
  <div>
    <v-btn @click="restDelete">Delete Account</v-btn>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "RestDelete",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    restDelete() {
      axios
        .request({
          url: "  https://foodierest.ml/api/restaurant-login",
          //   need to change the method
          method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then(() => {
          cookies.get(`token`);
          cookies.remove(`token`);
          cookies.get(`restaurantId`);
          cookies.remove(`restaurantId`);
          this.msg = "Account Deleted successfully!";
        })
        .catch(() => {
          alert(`An error has occurred, please try again!`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>