import React from "react";

import iconsImport from "../../helpers/iconsImport";
import { IDailyWeather } from "../../interfaces";
import { timeToWeekDay } from "../../helpers/convertTimestamp";

import {
  Container,
  WeatherDateLabel,
  WeatherImage,
  WeatherTemperatureLabel,
  WeatherCard
} from "./styles";

export function WeatherDailyCard({ dailyWeatherData }: IDailyWeather) {
  const { dt, weather, temp } = dailyWeatherData;
  const { description, icon } = weather[0];
  return (
    <Container>
      <WeatherCard>
        <WeatherImage source={iconsImport[icon]} />
        <WeatherDateLabel>
          {timeToWeekDay(dt)} - {description}
        </WeatherDateLabel>
      </WeatherCard>
      <WeatherTemperatureLabel>
        {Math.round(temp.max)}º / {Math.round(temp.min)}º
      </WeatherTemperatureLabel>
    </Container>
  );
}
