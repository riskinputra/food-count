import rapidAPI from "./ListAPI/rapidAPI";
import spooncularAPI from "./ListAPI/spoonacularAPI";

export default {
  rapid: { ...rapidAPI },
  spoonacular: { ...spooncularAPI }
};
