<template>
  <div id="recipes" class="recipes">
    <BrowseRecipe />
    <v-container>
      <RecipesList />
    </v-container>
  </div>
</template>

<script>
import { isEmpty } from "lodash";

import RecipesList from "./components/RecipesList";
import BrowseRecipe from "./components/BrowseRecipe";

export default {
  name: "Recipes",
  components: {
    BrowseRecipe,
    RecipesList
  },
  created() {
    const { query } = this.$route.params;
    if (!isEmpty(query)) {
      this.$store.dispatch("getMoreRecipes", { query });
    } else {
      this.$store.dispatch("getMoreRecipes", { sort: "time" });
    }
  }
};
</script>

<style></style>
