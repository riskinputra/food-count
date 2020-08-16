import SPOONACULAR_API_DEFAULT from "./API_DEFAULT";

const GET_API = path => {
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

const POST_API = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    SPOONACULAR_API_DEFAULT.post(path, data)
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
  GET_API,
  POST_API
};

export default methods;
