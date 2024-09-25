import { ForecastResponse, WeatherResponse } from "@/types/weather-types";
import { apiWeather } from "../api-weather";

// export const getWeather = (q: string) => {
//   const response = apiWeather.get<WeatherResponse>("/weather", {
//     params: { units: "metric", q: q },
//   });
//   return response;
// };

export const getWeather = async (q: string): Promise<WeatherResponse> => {
  const response = apiWeather.get("/weather", {
    params: { units: "metric", q: q },
  });

  const data: WeatherResponse = (await response).data;
  return data;
};

export const getForecast = async (q: string): Promise<ForecastResponse> => {
  const response = apiWeather.get("/forecast", {
    params: { units: "metric", q: q },
  });

  const data: ForecastResponse = (await response).data;
  return data;
};
