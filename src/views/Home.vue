<template>
  <div class="home">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="product in latestProducts"
            v-bind:key="product.id"
          >
            <div class="card" style="width: 10rem">
              <img
                v-bind:src="product.get_thumbnail"
                class="card-img-top"
                v-bind:alt="product.name"
              />
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <router-link v-bind:to="product.get_absolute_url" class="btn"
                  >View Details</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      latestProducts: [],
    };
  },
  components: {},
  mounted() {
    this.getLatestProducts();

    document.title = "Home | Djackets";
  },
  methods: {
    // Remember to enhance state management with vuex
    // Remember to use async await
    // Remember to use $store.commit

    getLatestProducts() {
      axios
        .get("/api/v1/latest-products/")
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      // this.$store.commit("setIsLoading", false);
    },
  },
};
</script>
