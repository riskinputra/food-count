<template>
  <div id="food-analys" class="food-analys">
    <v-row>
      <v-col cols="12" sm="12" class="pb-0">
        <div class="food-analys-head">
          <h3 class="mb-0">Try to analys your food with image</h3>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <Dropzone />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="food-analys-label" v-if="!analys">
          Your information image will show here
        </div>
        <div class="food-analys-result" v-else>
          <div class="food-analys-result--title">Nutritional Information :</div>
          <div class="food-analys-result--detail">
            <v-row>
              <v-col cols="12" sm="12" class="py-0">
                <span>Cat:</span>
                <v-chip class="ma-2" color="#FB8C00" outlined small>{{
                  analys.category.name.split("_").join(" ")
                }}</v-chip>
              </v-col>
            </v-row>
            <v-row
              v-for="(key, index) in Object.keys(analys.nutrition)"
              :key="index"
            >
              <v-col cols="12" sm="12" v-if="key !== 'recipesUsed'">
                <span class="key">{{ key }}</span>
                {{
                  `: ${analys.nutrition[key].value} ${analys.nutrition[key].unit} (std: ${analys.nutrition[key].standardDeviation} ${analys.nutrition[key].unit})`
                }}
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="analys">
      <v-col cols="12" sm="12" class="pb-0">
        <div class="food-analys-result--title">Related Recipes :</div>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            class="pb-0"
            v-for="recipe in analys.recipes"
            :key="recipe.id"
          >
            <div class="related-recipe">
              <router-link to="#">{{ recipe.title }}</router-link>
            </div>
          </v-col>
        </v-row>
        <!-- <ul class="related-recipe">
          <li v-for="recipe in analys.recipes" :key="recipe.id">
            <router-link to="#">{{recipe.title}}</router-link>
          </li>
        </ul>-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Dropzone from "@/components/Dropzone";

export default {
  name: "FoodAnalys",
  components: {
    Dropzone
  },
  data() {
    return {
      analys: {
        nutrition: {
          recipesUsed: 25,
          calories: {
            value: 127,
            unit: "calories",
            confidenceRange95Percent: {
              min: 103.28,
              max: 251.71
            },
            standardDeviation: 189.33
          },
          fat: {
            value: 1,
            unit: "g",
            confidenceRange95Percent: {
              min: 0.04,
              max: 13.39
            },
            standardDeviation: 17.02
          },
          protein: {
            value: 2,
            unit: "g",
            confidenceRange95Percent: {
              min: 1.66,
              max: 4.61
            },
            standardDeviation: 3.77
          },
          carbs: {
            value: 25,
            unit: "g",
            confidenceRange95Percent: {
              min: 23.38,
              max: 35.26
            },
            standardDeviation: 15.16
          }
        },
        category: {
          name: "fruit_salad",
          probability: 0.9982989793876325
        },
        recipes: [
          {
            id: 617331,
            title:
              "Fruit Salad with Creamy Glazed Dressing {My Favorite Fruit Salad}",
            imageType: "jpg",
            url:
              "http://www.melskitchencafe.com/fruit-salad-with-creamy-glazed-dressing-my-favorite-fruit-salad/"
          },
          {
            id: 581274,
            title: "Spinach Stone Fruit Salad: Summer's Best Fruit Made Dinner",
            imageType: "jpg",
            url:
              "http://www.foodfanatic.com/2013/07/spinach-stone-fruit-salad-summers-best-fruit-made-dinner/"
          },
          {
            id: 486650,
            title: "fruit salad , how to make fruit salad | fruit s",
            imageType: "jpg",
            url: "http://www.vegrecipesofindia.com/fruit-salad-recipe/"
          },
          {
            id: 679317,
            title: "Fruit Rojak – Spicy Fruit Salad",
            imageType: "jpg",
            url: "http://hilahcooking.com/fruit-rojak-spicy-fruit-salad/"
          },
          {
            id: 531630,
            title:
              "Mojito Fruit Salad: Melon & Berry Salad with Mint-Lime Dressing",
            imageType: "jpg",
            url:
              "http://premeditatedleftovers.com/recipes-cooking-tips/watermelon-berry-salad-honey-lime-dressing/"
          },
          {
            id: 604477,
            title:
              "Caribbean Jerk Salmon with Curried Pineapple and Goat Cheese Salad + Fruit Salad",
            imageType: "jpg",
            url:
              "http://www.halfbakedharvest.com/caribbean-jerk-salmon-curried-pineapple-goat-cheese-salad-fruit-salad/"
          },
          {
            id: 607673,
            title: "Fiery Fruit & Quinoa Salad from Salad Samurai",
            imageType: "jpg",
            url:
              "http://ohmyveggies.com/fiery-fruit-quinoa-salad-from-salad-samurai/"
          },
          {
            id: 587853,
            title: "Whipped Cream Fruit Salad (Waldorf Salad)",
            imageType: "jpg",
            url:
              "http://comfyinthekitchen.com/2013/11/whipped-cream-fruit-salad-waldorf-salad/"
          },
          {
            id: 122768,
            title: "The Best Fruit Salad Ever",
            imageType: "jpg",
            url: "http://www.food.com/recipe/the-best-fruit-salad-ever-402628"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
