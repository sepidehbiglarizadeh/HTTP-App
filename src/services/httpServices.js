import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

// axios.defaults.headers.common["Authorization"]="AUTH-Token";

axios.interceptors.request.use(
    (req) => {
      console.log(req);
      return req;
    },
    (err) => {
      console.log(err);
      return Promise.reject();
    }
  );

axios.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
