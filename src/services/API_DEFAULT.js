import axios from "axios";

const API_DOMAIN =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";

const SPOONACULAR_API_DEFAULT = axios.create({
  baseURL: `${API_DOMAIN}/v1`, // eslint-disable-line
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY
  }
});

export default SPOONACULAR_API_DEFAULT;
