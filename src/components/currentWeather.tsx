import { current as CurrentType } from '@/types/index';
import React from 'react';

interface CurrentWeatherProps {
    current: CurrentType | null;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current }) => {
    if (!current) {
        return (
            <div className="flex items-center justify-center h-screen  text-lg">
                .
            </div>
        );
    }

    // const numberConvertor = (num: number) => {
    //     Math.round(num);
    // }

    return (
        <div className="text-center space-y-4 p-6  bg-card backdrop-blur-md rounded">
            <h1 className="text-4xl font-bold tracking-normal">{current?.condition.text}</h1>
            <div className=" text-lg flex items-center justify-center space-x-8">
                <div className="text-sm">
                    <p className="uppercase tracking-wide">Low</p>
                    <p className="font-bold">{Math.round(current.temp_c - 2)}°C</p>
                </div>
                <img
                    className="w-24 h-24 mx-auto"
                    src={current.condition.icon}
                    alt={current.condition.text}
                />
                <div className="text-sm">
                    <p className="uppercase tracking-wide">High</p>
                    <p className="font-bold">{Math.round(current.temp_c + 2)}°C</p>
                </div>
            </div>
            <p className="text-6xl font-light ">{current.temp_c}°C</p>
        </div>
    );
};
