<template>
  <div>
    <h1>Wlecome to FlyMc!</h1>
    <h3>Hungry? Let's get ordering</h3>
    <div class="links">
      <p>Sign up or Log in as a User</p>
      <router-link to="/client-page">User Sign up/Log In</router-link>
      <br />
      <p>Sign up or Log In as a Restaurant</p>
      <router-link to="/resto-page">Restaurant Sign Up/Log In</router-link>
    </div>

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

export default {
  name: "DiscoverPage",
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

h3 {
  text-align: center;
}

.links {
  text-align: center;
  margin: 20px;
  background-color: rgba(181, 130, 181, 0.324);
}
</style>