import axios from "axios";

const service = axios.create({
  baseURL: "http://172.16.61.128:5001/api/",
  timeout: 10000,
});

service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
