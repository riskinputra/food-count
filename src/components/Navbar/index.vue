<template>
  <div id="navbar" class="navbar">
    <v-app-bar app color="#FB8C00">
      <v-container>
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo-white.svg"
              transition="scale-transition"
            />
          </router-link>
          <div class="d-flex full-width">
            <v-text-field
              label="Find a recipe..."
              single-line
              hide-details
              solo
              class="navbar-input-search"
              v-model="search"
              v-on:keyup.13="findRecipehandler"
            ></v-text-field>
            <v-btn
              color="grey lighten-3"
              light
              large
              height="48"
              class="navbar-btn-search"
              @click="findRecipehandler"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    search: ""
  }),
  methods: {
    findRecipehandler() {
      this.$router.push(`/recipes/query/${this.search}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
