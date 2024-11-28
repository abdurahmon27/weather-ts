import axios, { AxiosError } from "axios";
import { ForecastData } from "@/types/index";
import { API_KEY } from "@/constants/index";

if (!API_KEY) {
  throw new Error("Missing Weather API Key");
}

export const fetchWeatherData = async (
  location: string
): Promise<ForecastData> => {
  if (!location) {
    throw new Error("Location is required");
  }

  try {
    const response = await axios.get<ForecastData>(
      `https://api.weatherapi.com/v1/forecast.json`,
      {
        params: {
          key: API_KEY,
          q: location,
          days: 7,
        },
        timeout: 5000,
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new Error(
          error.response.data.error?.message || "api failed to fetch data"
        );
      }
      if (error.request) {
        throw new Error("no response from the api");
      }
    }

    console.error(error);
    throw new Error("failed to fetch data");
  }
};
