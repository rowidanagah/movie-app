import axios from "axios";

export const axiosInstance  = 
axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular"
})



// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    config.params = {api_key: "9b743af1d4fde1d65af33c40dcccce87"}

    store.dispatch(changeLoader(true))
    console.log(config, "INTERCEPTOR")
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    store.dispatch(changeLoader(false))
    return response;
  }, function (error) {
    return Promise.reject(error);
  });