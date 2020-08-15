<template>
  <div id="healthiness" class="healthiness">
    <v-row>
      <v-col cols="12" sm="12" class="pb-0">
        <div class="healthiness-head">
          <h3 class="mb-0">Healthiness</h3>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-card>
          <div class="healthiness-content-lg">
            <v-img :src="firstHealthiness.image" class="healthiness-img-lg" />
            <div class="healthiness-title-lg">
              <div>{{ firstHealthiness.title }}</div>
              <v-btn color="#FB8C00" depressed small dark>
                Get the recipe
                <v-icon small class="ml-1">mdi-arrow-right-bold-circle</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="pt-0">
        <v-row>
          <v-col
            class="pl-md-0"
            cols="12"
            sm="12"
            v-for="healthy in healthiness"
            :key="healthy.id"
          >
            <v-card>
              <v-row>
                <v-col cols="4" sm="4" class="py-0 pr-0">
                  <v-img
                    :src="healthy.image"
                    class="fill-height healthiness-img-sm"
                  />
                </v-col>
                <v-col cols="8" sm="8">
                  <div class="healthiness-title-sm">{{ healthy.title }}</div>
                  <v-btn color="#FB8C00" depressed small dark class="mt-1">
                    Get the recipe
                    <v-icon small class="ml-1"
                      >mdi-arrow-right-bold-circle</v-icon
                    >
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Healthiness",
  data() {
    return {
      firstHealthiness: {
        id: 305925,
        title: "Spinach Stuffed Baked Sole",
        image: "https://spoonacular.com/recipeImages/305925-312x231.jpeg",
        imageType: "jpeg"
      },
      healthiness: [
        {
          id: 30338,
          title: "Spanish-Style Carrots and Cauliflower",
          image: "https://spoonacular.com/recipeImages/30338-312x231.jpg",
          imageType: "jpg"
        },
        {
          id: 1164981,
          title: "Instant Pot Stuffed Spaghetti Squash",
          image: "https://spoonacular.com/recipeImages/1164981-312x231.jpg",
          imageType: "jpg"
        },
        {
          id: 86266,
          title: "Roast Cod with Leeks, Tomatoes, and Spinach",
          image: "https://spoonacular.com/recipeImages/86266-312x231.png",
          imageType: "png"
        },
        {
          id: 87731,
          title: "Wasabi Salmon",
          image: "https://spoonacular.com/recipeImages/87731-312x231.jpg",
          imageType: "jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
