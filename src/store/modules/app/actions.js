import { result } from "lodash";
import queryString from "query-string";
import API_DEFAULT from "@/services";

const actions = {
  getData({ dispatch }) {
    dispatch("getTopFive");
    dispatch("getRecentRecipes");
    dispatch("getHealthRecipes");
  },
  async getTopFive({ commit }) {
    const qs = {
      sort: "popularity",
      sortDirection: "asc",
      number: 5,
      apiKey: process.env.VUE_APP_API_SPOONCULAR_KEY
    };
    commit("setTopFivePreload", true);
    try {
      const response = await API_DEFAULT.spoonacular.searchRecipes(
        queryString.stringify(qs)
      );
      commit("setTopData", response);
      commit("setTopFivePreload", false);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getRecentRecipes({ commit }) {
    const qs = {
      sort: "time",
      number: 3
    };
    commit("setRecentPreload", true);
    try {
      const response = await API_DEFAULT.rapid.searchRecipes(
        queryString.stringify(qs)
      );
      commit("setRecentData", response);
      commit("setRecentPreload", false);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getHealthRecipes({ commit }) {
    const qs = {
      sort: "healthiness",
      sortDirection: "asc",
      number: 5,
      apiKey: process.env.VUE_APP_API_SPOONCULAR_KEY
    };
    commit("setHealthinessPreload", true);
    try {
      const response = await API_DEFAULT.spoonacular.searchRecipes(
        queryString.stringify(qs)
      );
      const topFirstRecipe = result(response, "results", [])[0];
      const setResult = result(response, "results", []).slice(1);
      commit("setHealthinessData", {
        ...response,
        results: setResult,
        topFirstRecipe
      });
      commit("setHealthinessPreload", false);
    } catch (err) {
      console.error(err.message);
    }
  },

  async postImageAnalyze({ commit }, data) {
    const formData = new FormData();
    formData.append("file", data);
    try {
      const response = await API_DEFAULT.rapid.postImage(formData);
      commit("setAnalyzeData", response);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getMoreRecipes({ commit }, query) {
    const qs = {
      ...query,
      sortDirection: "asc",
      number: 40,
      apiKey: process.env.VUE_APP_API_SPOONCULAR_KEY
    };
    commit("setRecipesPreload", true);
    try {
      const response = await API_DEFAULT.spoonacular.searchRecipes(
        queryString.stringify(qs)
      );
      commit("setRecipes", response);
      commit("setRecipesPreload", false);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getRecipeDetail({ commit }, id) {
    commit("setRecipeDetailPreload", true);
    try {
      const response = await API_DEFAULT.spoonacular.getRecipeDetail(id);
      commit("setRecipe", response);
      commit("setRecipeDetailPreload", false);
    } catch (err) {
      console.error(err.message);
    }
  }
};

export default actions;
