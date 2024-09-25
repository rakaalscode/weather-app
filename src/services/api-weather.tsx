import axios from "axios";

export const apiWeather = axios.create({
  baseURL: `${import.meta.env.VITE_API_WEATHER}`,
  params: {
    appId: `${import.meta.env.VITE_API_WEATHER_KEY}`,
  },
});
