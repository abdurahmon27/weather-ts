"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const CityClock: React.FC = () => {
    const [hourRotation, setHourRotation] = useState(0);

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();
        const hourRotationDeg = (currentHour % 12) * 30;
        setHourRotation(hourRotationDeg);

        const interval = setInterval(() => {
            setHourRotation((prevRotation) => prevRotation + 30);
        }, 3600 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[250px] h-[250px] flex justify-center items-center rounded-full ">
                {[...Array(12)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1 h-3 bg-gray-500"
                        style={{
                            transform: `rotate(${index * 30}deg) translateY(-28px)`,
                            transformOrigin: "center 100%",
                        }}
                    ></div>
                ))}
            </div>
            <div
                className="absolute w-16 h-16"
                style={{
                    transform: `rotate(${hourRotation}deg)`,
                    transformOrigin: "center bottom",
                    transition: "transform 0.5s linear",
                }}
            >
                <Image
                    src="/sun.webp"
                    alt={`clock`}
                    width={24}
                    height={24}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default CityClock;
