<template>
  <div>
    <h1>Sign Up</h1>
    <v-row class="clientform">
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

      <v-col cols="12" md="10">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="password" label="Password"></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field v-model="phoneNum" label="Phone Number : XXX-XXX-XXX">
        </v-text-field>
      </v-col>
    </v-row>

    <v-btn class="btn" @click="restSignup">Sign Up</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import cookies from "vue-cookies";

export default {
  name: "RestSignupPage",
  data() {
    return {
      name: "",
      address: "",
      bio: "",
      city: "",
      email: "",
      password: "",
      phoneNum: "",
    };
  },
  methods: {
    restSignup() {
      axios
        .request({
          url: "https://foodierest.ml/api/restaurant",
          method: "POST",
          headers: {
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
          data: {
            name: this.name,
            address: this.address,
            bio: this.bio,
            city: this.city,
            email: this.email,
            password: this.password,
            phoneNum: this.phoneNum,
          },
        })
        .then((response) => {
          router.push("/discover-page");
          cookies.set(`restaurantId`, response.data.restaurantId);
          // will need to use this cookie update info
          cookies.set(`token`, response.data.token);
        })
        .catch(() => {
          // this alert will pop up if signup fails
          alert("Sign up failed, try again");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.clientform {
  margin-left: 30px;
}

.btn {
  margin: 20px;
}

h1 {
  margin-left: 30px;
}
</style>