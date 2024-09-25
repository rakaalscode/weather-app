import { Cloud, Droplet, Thermometer, Wind } from "lucide-react";

interface TodayAirConditionItemProps {
  icon: "Thermometer" | "Wind" | "Cloud" | "Droplet";
  temp: string | number;
}

export const TodayAirConditionItem = ({
  icon,
  temp,
}: TodayAirConditionItemProps) => {
  const getWeatherIcon = (weatherIcon: string) => {
    switch (weatherIcon) {
      case "Thermometer":
        return <Thermometer />;
      case "Wind":
        return <Wind />;
      case "Cloud":
        return <Cloud />;
      case "Droplet":
        return <Droplet />;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col items-center">
      {getWeatherIcon(icon)}
      <span>{temp}</span>
    </div>
  );
};
