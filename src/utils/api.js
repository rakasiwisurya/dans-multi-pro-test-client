import axios from "axios";
import { webStorage } from "./webStorage";

export const api = (() => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
  });

  instance.interceptors.request.use(
    (config) => {
      const user = webStorage.get("user");

      const newConfig = {
        ...config,
        headers: {
          Authorization: user?.token ? `Bearer ${user?.token}` : undefined,
        },
      };

      return newConfig;
    },
    (error) => Promise.reject(error)
  );

  return instance;
})();
