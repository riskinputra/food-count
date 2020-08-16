import methods from "../methods";

/** RECIPES API */

// Methdos GET
const searchRecipes = query =>
  methods.SPOONACULAR_GET_API(`/recipes/complexSearch?${query}`);
const getRecipeDetail = id =>
  methods.SPOONACULAR_GET_API(
    `/recipes/${id}/information?apiKey=${process.env.VUE_APP_API_SPOONCULAR_KEY}`
  );

export default {
  searchRecipes,
  getRecipeDetail
};
