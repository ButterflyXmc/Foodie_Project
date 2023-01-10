<template>
  <div>
    <h1>Add Menu Item</h1>

    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="name" label="Name"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="description" label="Description"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field v-model="price" label="Price"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field
          v-model="imageUrl"
          label="Upload Image Link"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn @click="addToMenu">Save</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "RestMenuItem",
  data() {
    return {
      token: "",
      restaurantId: "",
      name: "",
      description: "",
      price: "",
      imageUrl: "",
    };
  },
  methods: {
    addToMenu() {
      axios
        .request({
          url: "https://foodierest.ml/api/menu",
          method: "POST",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
            token: this.token,
          },
          data: {
            name: this.name,
            description: this.description,
            price: this.price,
            imageUrl: this.imageUrl,
          },
        })
        .then(() => {
          alert("Added!!");
          this.restaurantId = cookies.get(`restaurantId`);
          this.token = cookies.get(`token`);
        })
        .catch(() => {
          alert("Error");
        });
    },
  },
};
</script>

<style scoped>
</style>