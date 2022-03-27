import api from "../services/api";
import { API_KEY } from '@env';

import { LocationObject } from "expo-location";

export function getWeatherData(location: LocationObject) {
  return api.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    {
      params: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
        exclude: "minutely,alerts",
      },
    }
  );
}
