import { ForecastResponse } from "@/types/weather-types";

interface AllTodayForecastProps {
  time: string;
  icon: string;
  temp: string;
}

export const getTodayForecast = (
  response: ForecastResponse,
  dt_now: string
) => {
  const todayForecast = response.list.filter(
    (item) => item.dt_txt.substring(0, 10) === dt_now.substring(0, 10)
  );

  const allTodayForecast: AllTodayForecastProps[] = todayForecast.map(
    (item) => ({
      time: item.dt_txt.substring(11, 16),
      icon: item.weather[0].main,
      temp: `${Math.round(item.main.temp)} °C`,
    })
  );

  return allTodayForecast;
};
