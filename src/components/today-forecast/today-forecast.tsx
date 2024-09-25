import { allTodayForecastResponse } from "@/types/weather-types";
import { TodayForecastItem } from "./today-forecast-item";

interface TodayForecastProps {
  forecastList: allTodayForecastResponse[];
}

export const TodayForecast = ({ forecastList }: TodayForecastProps) => {
  return (
    <div className="flex items-center justify-center mt-2 space-x-4">
      {forecastList.map((item, index) => (
        <TodayForecastItem
          key={index}
          icon={item.icon}
          time={item.time}
          temp={item.temp}
        />
      ))}
    </div>
  );
};
