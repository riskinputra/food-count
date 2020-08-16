<template>
  <div id="most-recent" class="most-recent">
    <v-row>
      <v-col cols="12" sm="12" class="pb-0">
        <div class="most-recent--head">
          <h3 class="mb-0">Most Recent</h3>
          <router-link to="/recipes">
            <i>view all recipes >></i>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(recipe, index) in recentRecipes.results"
        :cols="index <= 1 ? '6' : '12'"
        sm="4"
        :key="recipe.id"
      >
        <v-card class="most-recent--item">
          <v-row>
            <v-col cols="6" sm="6">
              <div class="recipe-title">
                <router-link :to="`/recipes/${recipe.id}`">{{
                  recipe.title
                }}</router-link>
              </div>
              <v-card-text>
                <div class="recipe-summary" v-html="recipe.summary"></div>
              </v-card-text>
              <v-btn color="#FB8C00" depressed small dark class="recipe-more">
                Read more
                <v-icon small class="ml-1">mdi-arrow-right-bold-circle</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" sm="6" class="pt-0 pb-0">
              <router-link :to="`/recipes/${recipe.id}`">
                <v-img
                  :src="recentRecipes.baseUri + recipe.image"
                  class="recipe-image"
                  :alt="recipe.title"
                  height="200"
                />
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MostRecent",
  computed: {
    ...mapState({
      recentRecipes: state => state.app.recent
    })
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
