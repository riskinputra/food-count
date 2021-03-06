import Vue from "vue";
import VueRouter from "vue-router";

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home");
const Recipes = () =>
  import(/* webpackChunkName: "Recipes" */ "@/views/Recipes");
const RecipesDetail = () =>
  import(/* webpackChunkName: "RecipesDetail" */ "@/views/RecipesDetail");
const Notfound = () =>
  import(/* webpackChunkName: "Notfound" */ "@/views/Notfound");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/recipes/:id",
    name: "RecipesDetail",
    component: RecipesDetail
  },
  {
    path: "/recipes/query/:query",
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/*",
    name: "Notfound",
    component: Notfound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
