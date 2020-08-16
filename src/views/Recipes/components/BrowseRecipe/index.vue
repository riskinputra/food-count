<template>
  <div class="recipes-browse">
    <v-container>
      <v-row>
        <v-col cols="3" sm="2">
          <div class="recipes-browse--title d-flex align-center">
            Browse recipes
          </div>
        </v-col>
        <v-col cols="9" sm="10">
          <div class="recipes-browse--filter">
            <v-row>
              <v-col>
                <Cuisines />
              </v-col>
              <v-col>
                <Diets />
              </v-col>
              <v-col>
                <Ingredients />
              </v-col>
              <v-col>
                <Intolerances />
              </v-col>
              <v-col>
                <Types />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Cuisines from "./components/Cuisines";
import Diets from "./components/Diets";
import Ingredients from "./components/Ingredients";
import Intolerances from "./components/Intolerances";
import Types from "./components/Types";
export default {
  name: "BrowseRecipe",
  components: {
    Cuisines,
    Diets,
    Ingredients,
    Intolerances,
    Types
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
