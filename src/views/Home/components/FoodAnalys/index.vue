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
        <div
          class="food-analys-result"
          v-if="Object.keys(analyze).length !== 0"
        >
          <div class="food-analys-result--title">Nutritional Information :</div>
          <div class="food-analys-result--detail">
            <v-row>
              <v-col cols="12" sm="12" class="py-0">
                <span>Cat:</span>
                <v-chip class="ma-2" color="#FB8C00" outlined small>{{
                  analyze.category.name.split("_").join(" ")
                }}</v-chip>
              </v-col>
            </v-row>
            <v-row
              v-for="(key, index) in Object.keys(analyze.nutrition)"
              :key="index"
            >
              <v-col cols="12" sm="12" v-if="key !== 'recipesUsed'">
                <span class="key">{{ key }}</span>
                {{
                  `: ${analyze.nutrition[key].value} ${analyze.nutrition[key].unit} (std: ${analyze.nutrition[key].standardDeviation} ${analyze.nutrition[key].unit})`
                }}
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="food-analys-label" v-else>
          Your information image will show here
        </div>
      </v-col>
    </v-row>
    <v-row v-if="Object.keys(analyze).length !== 0">
      <v-col cols="12" sm="12" class="pb-0">
        <div class="food-analys-result--title">Related Recipes :</div>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            class="pb-0"
            v-for="recipe in analyze.recipes"
            :key="recipe.id"
          >
            <div class="related-recipe">
              <router-link :to="`/recipes/${recipe.id}`">{{
                recipe.title
              }}</router-link>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Dropzone from "@/components/Dropzone";

export default {
  name: "FoodAnalys",
  components: {
    Dropzone
  },
  computed: {
    ...mapState({
      analyze: state => state.app.analyze
    })
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
