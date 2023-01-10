<template>
  <div>
    <h1>Explore All Restaurants</h1>
    <section>
      <div class="logout">
        <ClientLogoutPage />
      </div>

      <div class="delete">
        -------------------------------------
        <ClientDeletePage />
      </div>
    </section>
    <main v-for="restaurant in restaurant" :key="restaurant.restaurantId">
      <h2>Name : {{ restaurant.name }}</h2>
      <p>Address : {{ restaurant.address }}</p>
      <p>Bio : {{ restaurant.bio }}</p>
      <p>City : {{ restaurant.city }}</p>
      <p>Email : {{ restaurant.email }}</p>
      <p>Phone number : {{ restaurant.phoneNum }}</p>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

import ClientLogoutPage from "@/components/ClientLogoutPage.vue";
import ClientDeletePage from "@/components/ClientDeletePage.vue";

export default {
  name: "ClientHomePage",
  components: {
    ClientLogoutPage,
    ClientDeletePage,
  },
  data() {
    return {
      restaurant: "",
      name: "",
      address: "",
      bio: "",
      city: "",
      phoneNum: "",
    };
  },
  methods: {
    getAcct() {
      axios
        .request({
          url: "https://foodierest.ml/api/restaurant",
          method: "GET",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            token: cookies.get(`token`),
          },
        })
        .then((response) => {
          this.restaurant = response.data;
        })
        .catch(() => {
          alert("Error!");
        });
    },
  },

  mounted() {
    this.getAcct();
  },
};
</script>

<style scoped>
section {
  text-align: right;
}

main {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.38);
}

h1 {
  text-align: center;
  margin-top: 30px;
  font-size: 4em;
  background-color: rgba(128, 128, 128, 0.327);
}
</style>