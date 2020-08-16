<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="slide in topData.results"
      :key="slide.id"
      :src="
        `https://spoonacular.com/recipeImages/${slide.id}-636x393.${slide.imageType}`
      "
    >
      <v-sheet color="rgba(0, 0, 0, 0.25)" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="carousel-container">
            <div class="display-3 carousel-title">
              <router-link :to="`/recipes/${slide.id}`">{{
                slide.title
              }}</router-link>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Carousel",
  computed: {
    ...mapState({
      topData: state => state.app.top
    })
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
