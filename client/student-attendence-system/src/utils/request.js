import axios from "axios";
// your ipv4 address
const YOURIP = ''


const service = axios.create({
  baseURL: `http://${ YOURIP.length > 4 ? YOURIP : "localhost"}:5001/api/`,
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
