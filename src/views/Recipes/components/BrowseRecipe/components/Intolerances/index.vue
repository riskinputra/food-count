vue<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mr-1"
        color="#FB8C00"
        width="100%"
        dark
        v-bind="attrs"
        v-on="on"
        outlined
      >
        Intolerances
        <v-icon class="ml-1">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list class="recipes-browse--filter-list">
      <v-list-item
        v-for="(intolerance, index) in intolerances"
        :key="index"
        @click="getFilter(intolerance.title)"
      >
        <v-list-item-title>{{ intolerance.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Intolerances",
  data: () => ({
    intolerances: [
      { title: "Dairy" },
      { title: "Egg" },
      { title: "Gluten" },
      { title: "Grain" },
      { title: "Peanut" },
      { title: "Vegan" },
      { title: "Seafood" },
      { title: "Sesame" },
      { title: "Shellfish" },
      { title: "Soy" },
      { title: "Sulfite" },
      { title: "Tree Nut" },
      { title: "Wheat" }
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
