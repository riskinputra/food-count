<template>
  <div class="home">
    <Carousel />
    <v-container>
      <MostRecent />
      <Healthiness />
      <FoodAnalys />
    </v-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import MostRecent from "./components/MostRecent";
import Healthiness from "./components/Healthiness";
import FoodAnalys from "./components/FoodAnalys";
export default {
  name: "Home",
  components: {
    Carousel,
    MostRecent,
    Healthiness,
    FoodAnalys
  }
};
</script>
