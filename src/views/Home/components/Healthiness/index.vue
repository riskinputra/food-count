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
        <v-skeleton-loader
          class="mx-auto"
          max-width="100%"
          type="image"
          v-if="healtRecipes.isLoading"
        ></v-skeleton-loader>
        <v-card v-else>
          <div class="healthiness-content-lg">
            <v-img
              :src="healtRecipes.topFirstRecipe.image"
              class="healthiness-img-lg"
              min-height="400"
            />
            <div class="healthiness-title-lg">
              <div>
                <router-link
                  :to="`/recipes/${healtRecipes.topFirstRecipe.id}`"
                  >{{ healtRecipes.topFirstRecipe.title }}</router-link
                >
              </div>
              <v-btn
                color="#FB8C00"
                depressed
                small
                dark
                @click="
                  $router.push(`/recipes/${healtRecipes.topFirstRecipe.id}`)
                "
              >
                Get the recipe
                <v-icon small class="ml-1">mdi-arrow-right-bold-circle</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="pt-0">
        <div v-if="healtRecipes.isLoading">
          <v-skeleton-loader
            class="mx-auto mb-1"
            height="100"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="mx-auto mb-1"
            height="100"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="mx-auto mb-1"
            height="100"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
        </div>
        <v-row v-else>
          <v-col
            class="pl-md-0"
            cols="12"
            sm="12"
            v-for="healthy in healtRecipes.results"
            :key="healthy.id"
          >
            <v-card>
              <v-row>
                <v-col cols="4" sm="4" class="py-0 pr-0">
                  <router-link :to="`/recipes/${healthy.id}`">
                    <v-img
                      :src="healthy.image"
                      class="fill-height healthiness-img-sm"
                    />
                  </router-link>
                </v-col>
                <v-col cols="8" sm="8">
                  <div class="healthiness-title-sm">
                    <router-link :to="`/recipes/${healthy.id}`">
                      {{ healthy.title }}
                    </router-link>
                  </div>
                  <v-btn
                    color="#FB8C00"
                    depressed
                    small
                    dark
                    class="mt-1"
                    @click="$router.push(`/recipes/${healthy.id}`)"
                  >
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
import { mapState } from "vuex";
export default {
  name: "Healthiness",
  computed: {
    ...mapState({
      healtRecipes: state => state.app.healthiness
    })
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
