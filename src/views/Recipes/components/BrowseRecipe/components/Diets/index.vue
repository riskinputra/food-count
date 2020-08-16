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
        Special Diets
        <v-icon class="ml-1">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list class="recipes-browse--filter-list">
      <v-list-item
        v-for="(diet, index) in diets"
        :key="index"
        @click="getFilter(diet.title)"
      >
        <v-list-item-title>{{ diet.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Diets",
  data: () => ({
    diets: [
      { title: "Gluten Free" },
      { title: "Ketogenic" },
      { title: "Vegetarian" },
      { title: "Lacto-Vegetarian" },
      { title: "Ovo-Vegetarian" },
      { title: "Vegan" },
      { title: "Pescetarian" },
      { title: "Paleo" },
      { title: "Primal" },
      { title: "Whole30" }
    ]
  }),
  methods: {
    getFilter(value) {
      this.$store.dispatch("getMoreRecipes", { diet: value });
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
