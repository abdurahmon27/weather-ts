import { ForecastCard } from "@/components/forecastCard";
import { ForecastData } from "@/types";
import React from "react";

interface WeeklyForecastProps {
    forecast: ForecastData["forecast"] | null;
}

export const Forecast: React.FC<WeeklyForecastProps> = ({ forecast }) => {
    if (!forecast || !forecast.forecastday) {
        return (
            <div className="flex items-center justify-center text-lg">
                .
            </div>
        );
    }

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div className="w-full flex items-center justify-center py-5 px-2">
            <div className="bg-card backdrop-blur-md py-10 px-5 flex items-center justify-center rounded-md w-full">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-7 max-md:flex max-md:overflow-x-auto overflow-y-hidden max-md:space-x-5 h-full w-full scrollbar-hide">
                    {forecast.forecastday.map((day, index) => {
                        const date = new Date(day.date);
                        const dayOfWeek = daysOfWeek[date.getDay()];

                        return (
                            <div className="flex-shrink-0" key={index}>
                                <ForecastCard
                                    dayOfWeek={dayOfWeek}
                                    icon={day.day.condition.icon}
                                    conditionText={day.day.condition.text}
                                    minTemp={Math.round(day.day.mintemp_c)}
                                    maxTemp={Math.round(day.day.maxtemp_c)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
