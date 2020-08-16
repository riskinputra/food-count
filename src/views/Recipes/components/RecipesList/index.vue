<template>
  <div id="recipes-list" class="recipes-list">
    <v-row>
      <v-col cols="6" sm="3" v-for="recipe in recipesList" :key="recipe.id">
        <v-card>
          <router-link :to="`/recipes/${recipe.id}`">
            <v-img
              :src="`https://spoonacular.com/recipeImages/${recipe.image}`"
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
export default {
  name: "RecipesList",
  data: () => ({
    recipesList: [
      {
        id: 723984,
        title: "Cabbage Salad with Peanuts",
        readyInMinutes: 15,
        servings: 2,
        sourceUrl: "http://naturallyella.com/cabbage-salad-with-peanuts/",
        openLicense: 0,
        image: "cabbage-salad-with-peanuts-723984.jpg"
      },
      {
        id: 584549,
        title: "Stuffed Sweet Potato with Spinach, Hummus & Feta",
        readyInMinutes: 16,
        servings: 1,
        sourceUrl:
          "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/",
        openLicense: 0,
        image: "Stuffed-Sweet-Potato-with-Spinach--Hummus---Feta-584549.jpg"
      },
      {
        id: 667917,
        title: "Cilantro Salsa",
        readyInMinutes: 20,
        servings: 2,
        sourceUrl:
          "http://www.thegraciouspantry.com/clean-eating-cilantro-salsa/",
        openLicense: 0,
        image: "Cilantro-Salsa-667917.jpg"
      },
      {
        id: 482574,
        title: "Slow Cooker Vegetarian Chili with Butternut Squash",
        readyInMinutes: 250,
        servings: 4,
        sourceUrl:
          "http://thelemonbowl.com/2013/04/slow-cooker-vegetarian-chili-with-butternut-squash.html",
        openLicense: 0,
        image: "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
