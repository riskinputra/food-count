import methods from "../methods";

/** RECIPES API */

// Methdos GET
const searchRecipes = query =>
  methods.RAPID_GET_API(`/recipes/search?${query}`);

// Methdos POST
const postImage = data => methods.RAPID_POST_API("/food/images/analyze", data);

export default {
  searchRecipes,
  postImage
};
