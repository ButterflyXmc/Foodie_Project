<template>
  <div>
    <h2>Restaurant menu page</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RestMenuPage",
  methods: {
    menu() {
      axios
        .request({
          url: "https://foodierest.ml/api/menu",
          method: "GET",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          alert("Something went wrong, try again");
        });
    },
  },
};
</script>


<style lang="scss" scoped>
</style>