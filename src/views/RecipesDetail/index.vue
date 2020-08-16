<template>
  <div id="recipes-detail" class="recipes-detail">
    <div class="breadcrumbs">
      <v-container>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
            <span class="breadcrumbs-icon">
              <v-icon small>mdi-chevron-right</v-icon>
            </span>
          </li>
          <li>
            <router-link to="/recipes">Recipes</router-link>
            <span>
              <v-icon small>mdi-chevron-right</v-icon>
            </span>
          </li>
          <li>
            <div class="current">{{ recipesDetail.title }}</div>
          </li>
        </ul>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <div class="recipes-detail--head">{{ recipesDetail.title }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="7">
          <div class="recipes-detail--image">
            <v-img
              class="recipes-detail--image-src"
              :src="recipesDetail.image"
              :alt="recipesDetail.title"
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
                  {{ formatMinutes(recipesDetail.readyInMinutes) }}
                </span>
              </div>
              <div>
                <v-icon class="mr-1">mdi-currency-usd</v-icon>
                <span>{{ recipesDetail.pricePerServing }} per serving</span>
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Cuisines:</strong>
              </div>
              <div>
                {{
                  recipesDetail.cuisines && recipesDetail.cuisines.length > 1
                    ? recipesDetail.cuisines.join(", ")
                    : recipesDetail.cuisines.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Dish types:</strong>
              </div>
              <div>
                {{
                  recipesDetail.dishTypes && recipesDetail.dishTypes.length > 1
                    ? recipesDetail.dishTypes.join(", ")
                    : recipesDetail.dishTypes.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Diets:</strong>
              </div>
              <div>
                {{
                  recipesDetail.diets && recipesDetail.diets.length > 1
                    ? recipesDetail.diets.join(", ")
                    : recipesDetail.diets.join("")
                }}
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div>
                <strong>Occasions:</strong>
              </div>
              <div>
                {{
                  recipesDetail.occasions && recipesDetail.occasions.length > 1
                    ? recipesDetail.occasions.join(", ")
                    : recipesDetail.occasions.join("")
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
                v-html="recipesDetail.summary"
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
                    <span>
                      {{ formatMinutes(recipesDetail.readyInMinutes) }}
                    </span>
                    <v-icon class="ml-1">mdi-clock-time-three-outline</v-icon>
                  </div>
                  <div>
                    <span>{{ recipesDetail.servings }} servings</span>
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
                  v-for="ingredient in recipesDetail.extendedIngredients"
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
                  <div>{{ recipesDetail.preparationMinutes }} m</div>
                </div>
                <div class="preparation-time border-right">
                  <div>Cook</div>
                  <div>{{ recipesDetail.cookingMinutes }} m</div>
                </div>
                <div class="preparation-time">
                  <div>Ready in</div>
                  <div>{{ recipesDetail.readyInMinutes }} m</div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <div
                class="recipes-detail--instructions pb-10"
                v-for="(instruction,
                index) in recipesDetail.analyzedInstructions"
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
import formatTime from "@/utils/format-time";
export default {
  name: "RecipesDetail",
  data: () => ({
    recipesDetail: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: true,
      cheap: false,
      veryPopular: true,
      sustainable: false,
      weightWatcherSmartPoints: 12,
      gaps: "no",
      lowFodmap: false,
      preparationMinutes: 10,
      cookingMinutes: 6,
      aggregateLikes: 1501,
      spoonacularScore: 100,
      healthScore: 69,
      creditsText: "Cookin Canuck",
      sourceName: "Cookin Canuck",
      pricePerServing: 240.25,
      extendedIngredients: [
        {
          id: 1019,
          aisle: "Cheese",
          image: "feta.png",
          consistency: "solid",
          name: "feta cheese",
          original: "2 tbsp feta cheese",
          originalString: "2 tbsp feta cheese",
          originalName: "feta cheese",
          amount: 2,
          unit: "tbsp",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps"
            },
            metric: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps"
            }
          }
        },
        {
          id: 11215,
          aisle: "Produce",
          image: "garlic.png",
          consistency: "solid",
          name: "garlic clove",
          original: "1 garlic clove, minced",
          originalString: "1 garlic clove, minced",
          originalName: "garlic clove, minced",
          amount: 1,
          unit: "",
          meta: ["minced"],
          metaInformation: ["minced"],
          measures: {
            us: {
              amount: 1,
              unitShort: "",
              unitLong: ""
            },
            metric: {
              amount: 1,
              unitShort: "",
              unitLong: ""
            }
          }
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "solid",
          name: "ground pepper",
          original: "¼ tsp ground pepper",
          originalString: "¼ tsp ground pepper",
          originalName: "ground pepper",
          amount: 0.25,
          unit: "tsp",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 0.25,
              unitShort: "tsps",
              unitLong: "teaspoons"
            },
            metric: {
              amount: 0.25,
              unitShort: "tsps",
              unitLong: "teaspoons"
            }
          }
        },
        {
          id: 16158,
          aisle: "Refrigerated",
          image: "hummus.jpg",
          consistency: "solid",
          name: "hummus",
          original: "1 tbsp hummus",
          originalString: "1 tbsp hummus",
          originalName: "hummus",
          amount: 1,
          unit: "tbsp",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp"
            },
            metric: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp"
            }
          }
        },
        {
          id: 4053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "liquid",
          name: "olive oil",
          original: "1 tsp olive oil",
          originalString: "1 tsp olive oil",
          originalName: "olive oil",
          amount: 1,
          unit: "tsp",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon"
            },
            metric: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon"
            }
          }
        },
        {
          id: 10011457,
          aisle: "Produce",
          image: "spinach.jpg",
          consistency: "solid",
          name: "spinach",
          original: "2 cups (lightly packed) spinach, thinly sliced",
          originalString: "2 cups (lightly packed) spinach, thinly sliced",
          originalName: "(lightly packed) spinach, thinly sliced",
          amount: 2,
          unit: "cups",
          meta: ["packed", "thinly sliced", "(lightly )"],
          metaInformation: ["packed", "thinly sliced", "(lightly )"],
          measures: {
            us: {
              amount: 2,
              unitShort: "cups",
              unitLong: "cups"
            },
            metric: {
              amount: 473.176,
              unitShort: "ml",
              unitLong: "milliliters"
            }
          }
        },
        {
          id: 11507,
          aisle: "Produce",
          image: "sweet-potato.png",
          consistency: "solid",
          name: "sweet potato",
          original: "1 medium sweet potato",
          originalString: "1 medium sweet potato",
          originalName: "sweet potato",
          amount: 1,
          unit: "medium",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "medium",
              unitLong: "medium"
            },
            metric: {
              amount: 1,
              unitShort: "medium",
              unitLong: "medium"
            }
          }
        }
      ],
      id: 584549,
      title: "Stuffed Sweet Potato with Spinach, Hummus & Feta",
      readyInMinutes: 16,
      servings: 1,
      sourceUrl:
        "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/",
      image: "https://spoonacular.com/recipeImages/584549-556x370.jpg",
      imageType: "jpg",
      summary:
        'Stuffed Sweet Potato with Spinach, Hummus & Fetan is a <b>gluten free and vegetarian</b> side dish. One serving contains <b>286 calories</b>, <b>10g of protein</b>, and <b>14g of fat</b>. This recipe serves 1 and costs $2.08 per serving. 1499 people have made this recipe and would make it again. If you have hummus, garlic clove, olive oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>16 minutes</b>. This recipe is typical of middl eastern cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/spinach-and-feta-hummus-499728">Spinach and Feta Hummus</a>, <a href="https://spoonacular.com/recipes/spiced-sweet-roasted-red-pepper-feta-hummus-100993">Spiced Sweet Roasted Red Pepper & feta Hummus</a>, and <a href="https://spoonacular.com/recipes/feta-and-spinach-stuffed-bread-471194">Fetan and Spinach Stuffed Bread</a> for similar recipes.',
      cuisines: ["Middle Eastern"],
      dishTypes: ["side dish"],
      diets: ["gluten free", "lacto ovo vegetarian"],
      occasions: [],
      winePairing: {},
      instructions:
        "With a fork, pierce the sweet potato in several places.  Place the sweet potato in the microwave, on top of a piece of paper towel, and cook for 3 minutes per side (about 6 minutes total), or until the sweet potato is tender when pierced with a fork.  Let the sweet potato cool for several minutes, or until cool enough to handle.  Cut in half lengthwise.  Carefully scoop out the flesh of the potato and place in a medium-sized bowl.  Reserve the skins.  With the back of a fork, mash the potato flesh until most lumps are gone.Heat the olive oil in a small skillet set over medium heat.  Add the garlic and cook for 30 seconds.Add the spinach and cook, stirring, until the spinach is wilted, about 1 minute.Add the spinach mixture to the mashed sweet potato, along with the  hummus, feta cheese and ground pepper.  Stir gently to combine.Scoop the sweet potato mixture into the reserved sweet potato skins.  Serve.",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "With a fork, pierce the sweet potato in several places.",
              ingredients: [
                {
                  id: 11507,
                  name: "sweet potato",
                  localizedName: "sweet potato",
                  image: "sweet-potato.png"
                }
              ],
              equipment: []
            },
            {
              number: 2,
              step:
                "Place the sweet potato in the microwave, on top of a piece of paper towel, and cook for 3 minutes per side (about 6 minutes total), or until the sweet potato is tender when pierced with a fork.",
              ingredients: [
                {
                  id: 11507,
                  name: "sweet potato",
                  localizedName: "sweet potato",
                  image: "sweet-potato.png"
                }
              ],
              equipment: [
                {
                  id: 405895,
                  name: "paper towels",
                  localizedName: "paper towels",
                  image: "paper-towels.jpg"
                },
                {
                  id: 404762,
                  name: "microwave",
                  localizedName: "microwave",
                  image: "microwave.jpg"
                }
              ],
              length: {
                number: 9,
                unit: "minutes"
              }
            },
            {
              number: 3,
              step:
                "Let the sweet potato cool for several minutes, or until cool enough to handle.",
              ingredients: [
                {
                  id: 11507,
                  name: "sweet potato",
                  localizedName: "sweet potato",
                  image: "sweet-potato.png"
                }
              ],
              equipment: []
            },
            {
              number: 4,
              step:
                "Cut in half lengthwise.  Carefully scoop out the flesh of the potato and place in a medium-sized bowl.  Reserve the skins.  With the back of a fork, mash the potato flesh until most lumps are gone.",
              ingredients: [
                {
                  id: 11352,
                  name: "potato",
                  localizedName: "potato",
                  image: "potatoes-yukon-gold.png"
                }
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg"
                }
              ]
            },
            {
              number: 5,
              step:
                "Heat the olive oil in a small skillet set over medium heat.",
              ingredients: [
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg"
                }
              ],
              equipment: [
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png"
                }
              ]
            },
            {
              number: 6,
              step: "Add the garlic and cook for 30 seconds.",
              ingredients: [
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png"
                }
              ],
              equipment: []
            },
            {
              number: 7,
              step:
                "Add the spinach and cook, stirring, until the spinach is wilted, about 1 minute.",
              ingredients: [
                {
                  id: 10011457,
                  name: "spinach",
                  localizedName: "spinach",
                  image: "spinach.jpg"
                }
              ],
              equipment: [],
              length: {
                number: 1,
                unit: "minutes"
              }
            },
            {
              number: 8,
              step:
                "Add the spinach mixture to the mashed sweet potato, along with the  hummus, feta cheese and ground pepper.  Stir gently to combine.Scoop the sweet potato mixture into the reserved sweet potato skins.",
              ingredients: [
                {
                  id: 1002030,
                  name: "ground black pepper",
                  localizedName: "ground black pepper",
                  image: "pepper.jpg"
                },
                {
                  id: 11507,
                  name: "sweet potato",
                  localizedName: "sweet potato",
                  image: "sweet-potato.png"
                },
                {
                  id: 1019,
                  name: "feta cheese",
                  localizedName: "feta cheese",
                  image: "feta.png"
                },
                {
                  id: 10011457,
                  name: "spinach",
                  localizedName: "spinach",
                  image: "spinach.jpg"
                },
                {
                  id: 16158,
                  name: "hummus",
                  localizedName: "hummus",
                  image: "hummus.jpg"
                }
              ],
              equipment: []
            },
            {
              number: 9,
              step: "Serve.",
              ingredients: [],
              equipment: []
            }
          ]
        }
      ],
      originalId: null
    }
  }),
  methods: {
    formatMinutes: getTime => {
      return formatTime.formatMinute(getTime);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
