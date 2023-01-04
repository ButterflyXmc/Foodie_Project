<template>
  <div>
    <v-btn>Delete Account</v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClientDeletePage",
  data() {
    return {};
  },
  methods: {
    deleteAccount() {
      axios
        .request({
          url: "https://foodierest.ml/#/docs/client",
          // https://foodierest.ml/api/client
          method: "DELETE",
          headers: {
            "x-api-key": this.apiKey,
            //   add token
          },
        })
        .then((response) => {
          console.log(response);
          //   need to test log before I add the key value pair for the user to see
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>