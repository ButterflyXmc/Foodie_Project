<template>
  <!-- In order to edit -->
  <!-- 1. we need a function to GET the info to display on the page -->
  <!-- 2. then another function  to PATCH that lets us edit/update the info -->
  <!-- 3. then we possibly need to GET the cookies from the resto page -->
  <!-- 4. we need mounted fucntion so the GET info prints as soon as the client is directed to this page -->

  <!-- need a div for the GET to work -->
  <div>
    <section v-for="restaurant in restaurant" :key="restaurant.restaurantId">
      <h2>Name : {{ restaurant.name }}</h2>
      <p>Address : {{ restaurant.address }}</p>
      <p>Bio : {{ restaurant.bio }}</p>
      <p>City : {{ restaurant.city }}</p>
      <p>Email : {{ restaurant.email }}</p>
      <p>Phone number : {{ restaurant.phoneNum }}</p>
    </section>
    <h1>Edit Account</h1>
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="name" label="Restaurant Name"></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="address" label="Restaurant Address">
        </v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="bio" label="Bio"> </v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="city" label="City"></v-text-field>
      </v-col>

      <!-- <v-col cols="12" md="10">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col> -->

      <!-- <v-col cols="12" md="10">
        <v-text-field v-model="password" label="Password"></v-text-field>
      </v-col> -->

      <v-col cols="12" md="10">
        <v-text-field v-model="phoneNum" label="Phone Number : XXX-XXX-XXX">
        </v-text-field>
      </v-col>
    </v-row>

    <v-btn @click="update">Save</v-btn>
  </div>

  <!--  -->
</template>


<script>
import axios from "axios";
import cookies from "vue-cookies";
// import router from "@/router";

export default {
  name: "RestEditAcct",
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
    update() {
      axios
        .request({
          url: "https://foodierest.ml/api/restaurant",
          method: "PATCH",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            // Maybe I need to put the cookies in a function for it to load when the page load??
            // token: cookies.get(`token`),
          },
          data: {
            token: this.token,
            name: this.name,
            address: this.address,
            bio: this.bio,
            city: this.city,
            // email: this.email,
            // password: this.password,
            phoneNum: this.phoneNum,
          },
        })
        .then((response) => {
          console.log(response);
          alert("Saved!");
        })
        .catch((error) => {
          console.log(error);
          alert("error!");
        });
    },
    getAcct() {
      axios
        .request({
          url: "https://foodierest.ml/api/restaurant",
          method: "GET",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            token: cookies.get(`token`),
          },
          // !!!! not sure
          // params: {
          //   restaurantId: this.restaurantId,
          // },
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
</style>