import axios, {AxiosRequestConfig} from "axios";
//const API_KEY = process.env.REACT;

declare global {
  interface Window {
    http: typeof http
  }
}

const http = axios.create({
  baseURL: process.env.REACT,
  transformRequest: [],
});

if(process.env.NODE_ENV === "development" ) {
  window.http = http
}

http.interceptors.request.use((res: AxiosRequestConfig) => {
  // if(res?.baseURL && res?.url){

  // }
  return res;
})

export {http}