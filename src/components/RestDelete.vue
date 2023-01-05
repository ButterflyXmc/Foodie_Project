<template>
  <div><v-btn @click="restDelete">Log Out</v-btn></div>
</template>

<script>
import axios from "axios";
export default {
  name: "RestDelete",
  methods: {
    restDelete() {
      axios
        .request({
          url: "  https://foodierest.ml/api/restaurant-login",
          //   need to change the method
          //   method: "DELETE",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then(() => {
          // get the cookies
          // the delete the cookies
          cookies.get(`token`);
          cookies.remove(`token`);
          cookies.get(`restaurantId`);
          cookies.remove(`restaurantId`);
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