import React from 'react';

interface ForecastCardProps {
  dayOfWeek: string;
  icon: string;
  conditionText: string;
  minTemp: number;
  maxTemp: number;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ dayOfWeek, icon, conditionText, minTemp, maxTemp }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-[50px] h-[70px]">
      <p className="text-sm font-medium uppercase">{dayOfWeek}</p>
      <img className="w-12 h-12 my-2" src={icon} alt={conditionText} />
      <div className="flex justify-between space-x-2">
        <p className="text-sm">{minTemp}°</p>
        <span className="border-r border-gray-400"></span>
        <p className="text-sm">{maxTemp}°</p>
      </div>
    </div>
  );
};
