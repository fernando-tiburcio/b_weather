import React from "react";

import { IHourlyWeather } from "../../interfaces";
import { timeToHourMinute } from '../../helpers/convertTimestamp';

import iconsImport from "../../helpers/iconsImport";
import { Container, WeatherImage, TemperatureLabel, TimeLabel } from "./styles";

export function WeatherHourlyCard({ hourlyWeatherData }: IHourlyWeather) {
  const { dt, temp, weather } = hourlyWeatherData;
  const { icon } = weather[0];

  return (
    <Container>
      <WeatherImage source={iconsImport[icon]} />
      <TemperatureLabel>
        {Math.round(temp)}º
      </TemperatureLabel>
      <TimeLabel>
        {timeToHourMinute(dt)}
      </TimeLabel>
    </Container>
  );
}
