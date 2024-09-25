import {
  TodayAirCondition,
  TodayWeatherCity,
  TodayWeatherDescription,
  TodayWeatherIcon,
} from "@/components/today-weather";
import { WeatherResponse } from "@/types/weather-types";

interface todayWeatherProps {
  data: WeatherResponse;
}

export const TodayWeather = ({ data }: todayWeatherProps) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5 space-y-5">
        <TodayWeatherCity value={data.name} />
        <TodayWeatherIcon icon={data.weather[0].main} />
        <TodayWeatherDescription
          temp={`${Math.round(data.main.temp)} °C`}
          description={data.weather[0].description}
        />
      </div>
      <div className="flex items-center justify-center mt-5">
        <TodayAirCondition data={data} />
      </div>
    </div>
  );
};
