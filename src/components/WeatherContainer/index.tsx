import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import iconsImport from "../../helpers/iconsImport";

import { timeToDate } from "../../helpers/convertTimestamp";
import { ICurrentWeather } from "../../interfaces";
import THEME from "../../theme";
import {
  Container,
  MainTemperature,
  FeelsLikeTemperature,
  TemperatureContainer,
  TemperatureDescription,
  TemperatureGraphicalData,
  WeatherImage,
  WeatherDescription,
  WeatherDate,
  TempVariationContainer,
  MinTempDayContainer,
  TemperatureVariationLabel,
  MaxTempDayContainer,
} from "./styles";

export const WeatherContainer = ({ currentWeather }: ICurrentWeather) => {
  const {dt, feels_like, temp, weather} = currentWeather;
  const {description, icon} = weather[0];
  return (
    <LinearGradient colors={THEME.COLORS.GRADIENT}>
      <Container>
        <TemperatureContainer>
          <TemperatureDescription>
            <MainTemperature>{Math.round(temp)}º</MainTemperature>
            <FeelsLikeTemperature>Sensação {Math.round(feels_like)}º</FeelsLikeTemperature>
          </TemperatureDescription>
          <TemperatureGraphicalData>
            <WeatherImage source={iconsImport[icon]} />
          </TemperatureGraphicalData>
        </TemperatureContainer>
        <WeatherDescription>{description}</WeatherDescription>
        <WeatherDate>{timeToDate(dt)}</WeatherDate>
        <TempVariationContainer>
          <MinTempDayContainer>
            <Entypo name="chevron-down" size={22} color="white" />
            <TemperatureVariationLabel>23º</TemperatureVariationLabel>
          </MinTempDayContainer>
          <MaxTempDayContainer>
            <Entypo name="chevron-up" size={22} color="white" />
            <TemperatureVariationLabel>33º</TemperatureVariationLabel>
          </MaxTempDayContainer>
        </TempVariationContainer>
      </Container>
    </LinearGradient>
  );
};
