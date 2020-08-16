import methods from "../methods";

/** RECIPES API */

// Methdos GET
const searchRecipes = query => methods.GET_API(`/recipes/search/${query}`);

export default {
  searchRecipes
};
