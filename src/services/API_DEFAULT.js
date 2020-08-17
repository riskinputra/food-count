import axios from "axios";

export const RAPID_SPOONACULAR_API_DEFAULT = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.VUE_APP_API_KEY
  }
});

export const SPOONACULAR_API_DEFAULT = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    "Content-Type": "application/json"
  }
});
