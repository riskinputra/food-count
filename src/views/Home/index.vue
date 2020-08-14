<template>
  <div class="home">
    <Carousel />
    <v-container>
      <MostRecent />
    </v-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import MostRecent from "./components/MostRecent";
export default {
  name: "Home",
  components: {
    Carousel,
    MostRecent
  }
};
</script>
