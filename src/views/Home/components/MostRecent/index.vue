<template>
  <div id="most-recent" class="most-recent">
    <v-row>
      <v-col cols="12" sm="12" class="pb-0">
        <div class="most-recent--head">
          <h3 class="mb-0">Most Recent</h3>
          <router-link to="#">
            <i>view all recipes >></i>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(recipe, index) in recipes"
        :cols="index <= 1 ? '6' : '12'"
        sm="4"
        :key="recipe.id"
      >
        <v-card class="most-recent--item">
          <v-row>
            <v-col cols="6" sm="6">
              <div class="recipe-title">
                <router-link to="#">{{ recipe.title }}</router-link>
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
              <router-link to="#">
                <v-img :src="recipe.image" class="recipe-image"></v-img>
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import formatTime from "@/utils/format-time";
export default {
  name: "MostRecent",
  data() {
    return {
      recipes: [
        {
          id: 716429,
          title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
          image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
          imageType: "jpg",
          servings: 2,
          readyInMinutes: 45,
          license: "CC BY-SA 3.0",
          sourceName: "Full Belly Sisters",
          sourceUrl:
            "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
          spoonacularSourceUrl:
            "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
          aggregateLikes: 209,
          healthScore: 19.0,
          spoonacularScore: 83.0,
          pricePerServing: 163.15,
          analyzedInstructions: [],
          cheap: false,
          weightWatcherSmartPoints: 17,
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          summary:
            'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.'
        },
        {
          id: 710429,
          title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
          image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
          imageType: "jpg",
          servings: 2,
          readyInMinutes: 45,
          license: "CC BY-SA 3.0",
          sourceName: "Full Belly Sisters",
          sourceUrl:
            "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
          spoonacularSourceUrl:
            "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
          aggregateLikes: 209,
          healthScore: 19.0,
          spoonacularScore: 83.0,
          pricePerServing: 163.15,
          analyzedInstructions: [],
          cheap: false,
          weightWatcherSmartPoints: 17,
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          summary:
            'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.'
        },
        {
          id: 711429,
          title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
          image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
          imageType: "jpg",
          servings: 2,
          readyInMinutes: 45,
          license: "CC BY-SA 3.0",
          sourceName: "Full Belly Sisters",
          sourceUrl:
            "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
          spoonacularSourceUrl:
            "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
          aggregateLikes: 209,
          healthScore: 19.0,
          spoonacularScore: 83.0,
          pricePerServing: 163.15,
          analyzedInstructions: [],
          cheap: false,
          weightWatcherSmartPoints: 17,
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          summary:
            'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.'
        }
      ]
    };
  },
  methods: {
    formatTime(getTime) {
      return formatTime.formatMinute(getTime);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
