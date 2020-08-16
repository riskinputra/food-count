import {
  SPOONACULAR_API_DEFAULT,
  RAPID_SPOONACULAR_API_DEFAULT
} from "./API_DEFAULT";

const SPOONACULAR_GET_API = path => {
  const promise = new Promise((resolve, reject) => {
    SPOONACULAR_API_DEFAULT.get(path)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
  return promise;
};
const RAPID_GET_API = path => {
  const promise = new Promise((resolve, reject) => {
    RAPID_SPOONACULAR_API_DEFAULT.get(path)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
  return promise;
};

const RAPID_POST_API = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    RAPID_SPOONACULAR_API_DEFAULT.post(path, data)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
  return promise;
};

const methods = {
  SPOONACULAR_GET_API,
  RAPID_GET_API,
  RAPID_POST_API
};

export default methods;
