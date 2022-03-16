import React from "react";
import { View } from "react-native";

import iconsImport from "../../helpers/iconsImport";
import { IDailyWeather } from "../../interfaces";
import { timeToWeekDay } from "../../helpers/convertTimestamp";

import {
  Container,
  WeatherDateLabel,
  WeatherImage,
  WeatherTemperatureLabel,
} from "./styles";

export function WeatherDailyCard({ dailyWeatherData }: IDailyWeather) {
  console.log("DEBUG dailyWeatherData : ", dailyWeatherData);
  const { dt, weather, temp } = dailyWeatherData;
  const { description, icon } = weather[0];
  return (
    <Container>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <WeatherImage source={iconsImport[icon]} />
        <WeatherDateLabel>
          {timeToWeekDay(dt)} - {description}
        </WeatherDateLabel>
      </View>
      <WeatherTemperatureLabel>
        {Math.round(temp.max)}º / {Math.round(temp.min)}º
      </WeatherTemperatureLabel>
    </Container>
  );
}
