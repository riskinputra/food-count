<template>
  <div class="home">
    <Loader v-if="isPreaload" />
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
import Loader from "@/components/Loader";

import MostRecent from "./components/MostRecent";
import Healthiness from "./components/Healthiness";
import FoodAnalys from "./components/FoodAnalys";

export default {
  name: "Home",
  data: () => ({
    isPreaload: true
  }),
  components: {
    Carousel,
    Loader,
    MostRecent,
    Healthiness,
    FoodAnalys
  },
  created() {
    this.$store.dispatch("getData");
  },
  mounted() {
    this.isPreaload = false;
  }
};
</script>
