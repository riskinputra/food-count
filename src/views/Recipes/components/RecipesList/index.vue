<template>
  <div id="recipes-list" class="recipes-list">
    <v-row v-if="recipesData.isLoading">
      <v-col cols="6" sm="3" v-for="index in 8" :key="index">
        <v-skeleton-loader
          class="mx-auto mb-1"
          width="100%"
          max-width="100%"
          type="image"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="6"
        sm="3"
        v-for="recipe in recipesData.results"
        :key="recipe.id"
      >
        <v-card>
          <router-link :to="`/recipes/${recipe.id}`">
            <v-img
              :src="recipe.image"
              class="align-end recipes-list--image"
              height="250"
            >
              <div class="recipes-list--title-container">
                <v-card-title class="recipes-list--title">{{
                  recipe.title
                }}</v-card-title>
              </div>
            </v-img>
          </router-link>
          <v-btn
            color="#FB8C00"
            depressed
            small
            dark
            width="100%"
            class="recipes-list--action"
            @click="$router.push(`/recipes/${recipe.id}`)"
          >
            Get the recipe
            <v-icon small class="ml-1">mdi-arrow-right-bold-circle</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RecipesList",
  computed: {
    ...mapState({
      recipesData: state => state.app.recipes
    })
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
