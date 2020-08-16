<template>
  <div id="recipes" class="recipes">
    <BrowseRecipe />
    <v-container>
      <RecipesList />
    </v-container>
  </div>
</template>

<script>
import RecipesList from "./components/RecipesList";
import BrowseRecipe from "./components/BrowseRecipe";
export default {
  name: "Recipes",
  components: {
    BrowseRecipe,
    RecipesList
  }
};
</script>

<style></style>
