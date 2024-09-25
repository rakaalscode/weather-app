import { EmptyState } from "@/components/empty-state";
import { Search } from "@/components/search";
import { TodayForecast } from "@/components/today-forecast";
import { TodayWeather } from "@/components/today-weather";
import ForecastJson from "@/data/forecast.json";
import WeatherJson from "@/data/weather.json";
import { getTodayForecast } from "@/helpers/data-utils";
import { getLocalDatetime } from "@/helpers/date-utils";
import { getForecast, getWeather } from "@/services/weather/weather-services";
import {
  allTodayForecastResponse,
  WeatherResponse,
} from "@/types/weather-types";
import { AxiosError } from "axios";
import { useState } from "react";

export const Home = () => {
  const [todayWeather, setTodayWeather] = useState<WeatherResponse | null>(
    null
  );
  const [todayForecast, setTodayForecast] = useState<
    allTodayForecastResponse[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchValue: string) => {
    if (!searchValue || searchValue.trim() === "") return null;
    const currentDateTime = getLocalDatetime();
    setError(null);
    setIsLoading(true);

    try {
      const weatherData = await getWeather(searchValue);
      const todayForecastData = await getForecast(searchValue);
      console.log(weatherData);
      console.log(todayForecastData);
      const todayForecastList = getTodayForecast(
        todayForecastData,
        currentDateTime
      );
      setTodayWeather(weatherData);
      setTodayForecast(todayForecastList);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
        switch (e.status) {
          case 404:
            setError("City not found. Please check the name and try again.");
            break;
          case 500:
            setError("Server error. Please try again later.");
            break;
          default:
            setError("An unexpected error occurred. Please try again.");
        }
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full p-2">
      <Search onChangeSubmit={handleSearch} />
      {isLoading ? (
        <div className="mt-5 min-h-[300px] flex flex-col items-center justify-center">
          <p className="mt-2 text-lg">Loading wait for a moment...</p>
        </div>
      ) : error ? (
        <div className="mt-5 min-h-[300px] flex flex-col items-center justify-center">
          <p className="mt-2 text-lg">{error}</p>
        </div>
      ) : todayWeather && todayForecast ? (
        <>
          <TodayWeather data={todayWeather} />
          <div className="flex items-center justify-center mt-5 space-x-4">
            <TodayForecast forecastList={todayForecast} />
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
