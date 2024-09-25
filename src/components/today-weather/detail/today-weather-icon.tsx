import { Cloud, CloudFog, CloudRain, Sun, Zap } from "lucide-react";

interface TodayWeatherIconProps {
  icon: string;
}

export const TodayWeatherIcon = ({ icon }: TodayWeatherIconProps) => {
  const getWeatherIcon = (weatherIcon: string) => {
    switch (weatherIcon) {
      case "Clear":
        return <Sun className="w-20 h-20 text-yellow-500 fill-yellow-500" />;
      case "Clouds":
        return <Cloud className="w-20 h-20 text-sky-500 fill-sky-500" />;
      case "Rain":
      case "Drizzle":
        return <CloudRain className="w-20 h-20 text-sky-500 fill-sky-500" />;
      case "Thunderstorm":
        return <Zap className="w-20 h-20 text-yellow-500 fill-yellow-500" />;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squal":
      case "Tornado":
        return <CloudFog className="w-20 h-20 text-slate-700 fill-slate-700" />;
      default:
        break;
    }
  };
  return <div>{getWeatherIcon(icon)}</div>;
};
