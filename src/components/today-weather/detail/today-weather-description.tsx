interface todayWeatherDescriptionProps {
  temp: number | string;
  description: string;
}

export const TodayWeatherDescription = ({
  temp,
  description,
}: todayWeatherDescriptionProps) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{temp}</div>
      <div className="text-xl font-semibold capitalize">{description}</div>
    </div>
  );
};
