import { Cloud, Sun, CloudRain, Zap, CloudFog } from "lucide-react";

interface TodayForecastItemProps {
  icon: string;
  temp: string | number;
  time: string | number;
}

export const TodayForecastItem = ({
  icon,
  temp,
  time,
}: TodayForecastItemProps) => {
  const getWeatherIcon = (weatherIcon: string) => {
    switch (weatherIcon) {
      case "Clear":
        return <Sun className="text-yellow-500 fill-yellow-500" />;
      case "Clouds":
        return <Cloud className="text-sky-500 fill-sky-500" />;
      case "Rain":
      case "Drizzle":
        return <CloudRain className="text-sky-500 fill-sky-500" />;
      case "Thunderstorm":
        return <Zap className="text-yellow-500 fill-yellow-500" />;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squal":
      case "Tornado":
        return <CloudFog className="text-slate-700 fill-slate-700" />;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center p-4 space-y-2 shadow rounded-xl">
        <span>{time}</span>
        {getWeatherIcon(icon)}
        <span>{temp}</span>
      </div>
    </div>
  );
};
