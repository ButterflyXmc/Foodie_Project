<template>
  <div>
    <h2>Restaurant menu page</h2>
    <!-- NO -->
    <!-- <h2>{{ menuItem }}</h2> -->
    <div v-for="item in menu" :key="item.menuId">
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RestMenuPage",
  data() {
    return {
      menu: [],
    };
  },
  methods: {
    Getmenu() {
      axios
        .request({
          url: "https://foodierest.ml/api/menu",
          method: "GET",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
          //...
          params: {
            restaurantId: this.$route.params.restaurantId,
          },
        })
        .then((response) => {
          console.log(response);
          this.menu = response.data;
        })
        .catch(() => {
          alert("Something went wrong, try again");
        });
    },
  },
  mounted() {
    this.Getmenu();
  },
};
</script>


<style lang="scss" scoped>
</style>