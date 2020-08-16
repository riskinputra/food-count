<template>
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
        Ingredients
        <v-icon class="ml-1">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list class="recipes-browse--filter-list">
      <v-list-item
        v-for="(ingredient, index) in ingredients"
        :key="index"
        @click="getFilter(ingredient.title)"
      >
        <v-list-item-title>{{ ingredient.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Ingredients",
  data: () => ({
    ingredients: [
      { title: "Baking" },
      { title: "Health Foods" },
      { title: "Spices and Seasonings" },
      { title: "Pasta and Rice" },
      { title: "Bakery/Bread" },
      { title: "Refrigerated" },
      { title: "Canned and Jarred" },
      { title: "Frozen" },
      { title: "Nut butters, Jams, and Honey" },
      { title: "Oil, Vinegar, Salad Dressing" },
      { title: "Condiments" },
      { title: "Savory Snacks" },
      { title: "Milk, Eggs, Other Dairy" },
      { title: "Ethnic Foods" },
      { title: "Tea and Coffee" },
      { title: "Meat" },
      { title: "Gourmet" },
      { title: "Sweet Snacks" },
      { title: "Gluten Free" },
      { title: "Cheese" },
      { title: "Nuts" },
      { title: "Bread" },
      { title: "Homemade" },
      { title: "Cheese" },
      { title: "Seafood" }
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
