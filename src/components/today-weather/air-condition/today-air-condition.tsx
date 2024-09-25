import { WeatherResponse } from "@/types/weather-types";
import { TodayAirConditionItem } from "./today-air-condition-item";

interface todayWeatherProps {
  data: WeatherResponse;
}

export const TodayAirCondition = ({ data }: todayWeatherProps) => {
  return (
    <div className="flex p-4 space-x-6 shadow rounded-xl">
      <TodayAirConditionItem
        icon="Thermometer"
        temp={`${Math.round(data.main.feels_like)}°C`}
      />
      <TodayAirConditionItem icon="Wind" temp={`23 m/s`} />
      <TodayAirConditionItem
        icon="Cloud"
        temp={`${Math.round(data.clouds.all)}%`}
      />
      <TodayAirConditionItem
        icon="Droplet"
        temp={`${Math.round(data.main.humidity)}%`}
      />
    </div>
  );
};
