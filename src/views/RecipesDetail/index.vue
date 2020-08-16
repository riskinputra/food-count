<template>
  <div id="recipes-detail" class="recipes-detail">
    <Breadcrumbs :items="breadcrumbs" :current="recipeData.title" />
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <div class="recipes-detail--head">{{ recipeData.title }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="7">
          <div class="recipes-detail--image">
            <v-img
              class="recipes-detail--image-src"
              :src="recipeData.image"
              :alt="recipeData.title"
              height="500"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="5">
          <v-row>
            <v-col cols="12" sm="12" class="pt-0">
              <div>
                <v-icon class="mr-1">mdi-clock-time-three-outline</v-icon>
                <span>
                  Ready in
                  {{ formatMinutes(recipeData.readyInMinutes) }}
                </span>
              </div>
              <div>
                <v-icon class="mr-1">mdi-currency-usd</v-icon>
                <span>{{ recipeData.pricePerServing }} per serving</span>
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Cuisines:</strong>
              </div>
              <div>
                {{
                  recipeData.cuisines && recipeData.cuisines.length > 1
                    ? recipeData.cuisines.join(", ")
                    : recipeData.cuisines.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Dish types:</strong>
              </div>
              <div>
                {{
                  recipeData.dishTypes && recipeData.dishTypes.length > 1
                    ? recipeData.dishTypes.join(", ")
                    : recipeData.dishTypes.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Diets:</strong>
              </div>
              <div>
                {{
                  recipeData.diets && recipeData.diets.length > 1
                    ? recipeData.diets.join(", ")
                    : recipeData.diets.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Occasions:</strong>
              </div>
              <div>
                {{
                  recipeData.occasions && recipeData.occasions.length > 1
                    ? recipeData.occasions.join(", ")
                    : recipeData.occasions.join("")
                }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <div
                v-html="recipeData.summary"
                class="recipes-detail--summary"
              ></div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <div class="recipes-detail--title">
                <div class="recipes-detail--title-text">Ingredients</div>
                <div class="recipes-detail--title-info">
                  <div>
                    <span>{{ formatMinutes(recipeData.readyInMinutes) }}</span>
                    <v-icon class="ml-1">mdi-clock-time-three-outline</v-icon>
                  </div>
                  <div>
                    <span>{{ recipeData.servings }} servings</span>
                    <v-icon class="ml-1">mdi-chart-pie</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  v-for="ingredient in recipeData.extendedIngredients"
                  :key="ingredient.id"
                >
                  <span class="ingredient-unit">
                    {{
                      `${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`
                    }}
                  </span>
                  {{ ingredient.originalName }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <div class="recipes-detail--title">
                <div class="recipes-detail--title-text">Directions</div>
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="recipes-detail--preparation">
                <div class="preparation-icon">
                  <v-icon class="mr-1" large
                    >mdi-clock-time-three-outline</v-icon
                  >
                </div>
                <div class="preparation-time border-right">
                  <div>Prep</div>
                  <div>{{ recipeData.preparationMinutes || 0 }} m</div>
                </div>
                <div class="preparation-time border-right">
                  <div>Cook</div>
                  <div>{{ recipeData.cookingMinutes || 0 }} m</div>
                </div>
                <div class="preparation-time">
                  <div>Ready in</div>
                  <div>{{ recipeData.readyInMinutes || 0 }} m</div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <div
                class="recipes-detail--instructions pb-10"
                v-for="(instruction, index) in recipeData.analyzedInstructions"
                :key="index"
              >
                <div class="pb-1">
                  <strong>{{ instruction.name }}</strong>
                </div>
                <ul class="step">
                  <li v-for="step in instruction.steps" :key="step.number">
                    <span class="step-number">{{ step.number }}.</span>
                    <span class="step-instruction">{{ step.step }}</span>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import formatTime from "@/utils/format-time";

import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "RecipesDetail",
  components: {
    Breadcrumbs
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        path: "/"
      },
      {
        text: "Recipes",
        disabled: false,
        path: "/recipes"
      }
    ]
  }),
  computed: {
    ...mapState({
      recipeData: state => state.app.recipeDetail
    })
  },
  methods: {
    formatMinutes: getTime => {
      return formatTime.formatMinute(getTime);
    }
  },
  created() {
    this.$store.dispatch("getRecipeDetail", parseInt(this.$route.params.id));
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
