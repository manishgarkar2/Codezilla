import Axios from 'axios';
import { API } from '.';


const interceptor = (store) => {
  Axios.interceptors.request.use(
    (conf) => {
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  Axios.interceptors.response.use(
    (next) => {
      return Promise.resolve(next);
    },
    (error) => {
      if (error.response.status == 401) {
        console.log("Interceptor Error",error.response)
      }
      else {
         console.log("Interceptor Error",error.response)
        // ShowErrorMessage("Something went wrong")
        console.log("Something went wrong Interceptor")
      }
      return Promise.reject(error);
    }
  );
};
export default {
  interceptor,
};