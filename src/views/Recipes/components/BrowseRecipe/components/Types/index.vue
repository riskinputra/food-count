vue<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mr-1" color="#FB8C00" width="100%" dark v-bind="attrs" v-on="on" outlined>
        Types
        <v-icon class="ml-1">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list class="recipes-browse--filter-list">
      <v-list-item v-for="(type, index) in types" :key="index" @click="getFilter(type.title)">
        <v-list-item-title>{{ type.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Types",
  data: () => ({
    types: [
      { title: "Main Course" },
      { title: "side dish" },
      { title: "dessert" },
      { title: "appetizer" },
      { title: "salad" },
      { title: "bread" },
      { title: "breakfast" },
      { title: "soup" },
      { title: "beverage" },
      { title: "sauce" },
      { title: "marinade" },
      { title: "fingerfood" },
      { title: "snack" },
      { title: "drink" }
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