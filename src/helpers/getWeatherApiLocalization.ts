import api from "../services/api";
import { API_KEY } from "@env";

import { LocationObject } from "expo-location";

export function getWeatherApiLocalization(location: LocationObject) {
  return api.get("https://api.openweathermap.org/geo/1.0/reverse", {
    params: {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      appid: API_KEY,
      limit: 3,
      lang: "pt_br",
    },
  });
}
