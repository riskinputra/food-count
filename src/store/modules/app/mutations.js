const mutations = {
  setTopFivePreload(state, payload) {
    state.top.isLoading = payload;
  },
  setTopData(state, payload) {
    state.top = { ...state.top, ...payload };
  },

  setRecentPreload(state, payload) {
    state.recent.isLoading = payload;
  },
  setRecentData(state, payload) {
    state.recent = { ...state.recent, ...payload };
  },

  setHealthinessPreload(state, payload) {
    state.healthiness.isLoading = payload;
  },
  setHealthinessData(state, payload) {
    state.healthiness = { ...state.healthiness, ...payload };
  },

  setAnalyzeData(state, payload) {
    state.analyze = { ...state.analyze, ...payload };
  },

  setRecipesPreload(state, payload) {
    state.recipes.isLoading = payload;
  },
  setRecipes(state, payload) {
    state.recipes = { ...state.recipes, ...payload };
  },

  setRecipeDetailPreload(state, payload) {
    state.recipeDetail.isLoading = payload;
  },
  setRecipe(state, payload) {
    state.recipeDetail = { ...state.recipeDetail, ...payload };
  }
};

export default mutations;
