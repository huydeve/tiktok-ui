import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  'Content-Type': 'application/json',
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});
