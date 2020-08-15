<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mr-1" color="#FB8C00" width="100%" dark v-bind="attrs" v-on="on" outlined>
        Cuisines
        <v-icon class="ml-1">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list class="recipes-browse--filter-list">
      <v-list-item
        v-for="(cuisine, index) in cuisines"
        :key="index"
        @click="getFilter(cuisine.title)"
      >
        <v-list-item-title>{{ cuisine.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Cuisines",
  data: () => ({
    cuisines: [
      { title: "African" },
      { title: "American" },
      { title: "British" },
      { title: "Cajun" },
      { title: "Caribbean" },
      { title: "Chinese" },
      { title: "Eastern European" },
      { title: "European" },
      { title: "French" },
      { title: "German" },
      { title: "Indian" },
      { title: "Greek" },
      { title: "Irish" },
      { title: "Italian" },
      { title: "Japanese" },
      { title: "Jewish" },
      { title: "Korean" },
      { title: "Latin American" },
      { title: "Mediterranean" },
      { title: "Mexican" },
      { title: "Middle Eastern" },
      { title: "Nordic" },
      { title: "Southern" },
      { title: "Thai" },
      { title: "Spanish" },
      { title: "Vietnamese" }
    ]
  }),
  methods: {
    getFilter: value => {
      console.log("value", value);
    }
  }
};
</script>

<style lang="scss">
.recipes-browse--filter-list {
  max-height: 350px;
  overflow-y: scroll;
}
</style>