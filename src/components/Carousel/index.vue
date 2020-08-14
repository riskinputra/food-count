<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.image">
      <v-sheet color="rgba(0, 0, 0, 0.25)" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide.title }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        {
          id: 918948,
          title: "One Pot Zucchini Mushroom Pasta",
          image: "https://spoonacular.com/recipeImages/918948-312x231.jpg",
          imageType: "jpg"
        },
        {
          id: 717047,
          title: "Hasselback Garlic Cheesy Bread",
          image: "https://spoonacular.com/recipeImages/717047-312x231.png",
          imageType: "png"
        },
        {
          id: 624349,
          title: "quick Chiquita Banana Oatmeal Smoothie",
          image: "https://spoonacular.com/recipeImages/624349-312x231.jpg",
          imageType: "jpg"
        },
        {
          id: 762666,
          title: "Avocado Hummus",
          image: "https://spoonacular.com/recipeImages/762666-312x231.jpg",
          imageType: "jpg"
        },
        {
          id: 43455,
          title: "Brined Turkey With Fall Vegetables",
          image: "https://spoonacular.com/recipeImages/43455-312x231.jpg",
          imageType: "jpg"
        }
      ]
    };
  }
};
</script>

<style></style>
