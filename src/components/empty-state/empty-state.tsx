import { Cloud, CloudHail, Moon, Snowflake, Sun } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="mt-5 min-h-[300px] flex flex-col items-center justify-center">
      <div className="flex items-center">
        <Sun className="w-24 h-24 text-yellow-500 fill-yellow-500" />
        <Cloud className="w-24 h-24 text-sky-500 fill-sky-500" />
        <CloudHail className="w-24 h-24 text-sky-500 fill-sky-500" />
        <Snowflake className="w-24 h-24 text-sky-500 fill-sky-500" />
        <Moon className="w-24 h-24 text-sky-800 fill-sky-800" />
      </div>
      <p className="mt-2 text-lg">Explore current weather and forecast data</p>
    </div>
  );
};
