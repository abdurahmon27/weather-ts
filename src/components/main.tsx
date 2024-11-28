"use client";

import { ForecastData } from '@/types';
import { fetchWeatherData } from '@/utils/weather';
import { useState, useEffect } from 'react';
import { CurrentWeather } from './currentWeather';
import { Forecast } from './forecast';
import CityClock from './cityClock';

export const Main = () => {
    const location = 'London';
    const [weather, setWeather] = useState<ForecastData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getWeather = async (location: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherData(location);
            setWeather(data);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWeather(location);
    }, [location]);


    console.log(weather);

    return (
        <>
            {error && <p>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            {!loading && !error && (
                <div className="overflow-visible container mx-auto flex items-center justify-center flex-col py-5 gap-3">

                    <h1 className='font-bold font-sans text-3xl'>
                        {weather?.location.name}, {weather?.location.country}
                    </h1>
                    <CurrentWeather current={weather?.current || null} />
                    <Forecast forecast={weather?.forecast || null} />
                    <CityClock />
                </div>
            )}
        </>
    );
};
