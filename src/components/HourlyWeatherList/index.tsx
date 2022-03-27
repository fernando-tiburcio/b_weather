import React from "react";

import { WeatherHourlyCard } from "../WeatherHourlyCard";

import { IHourlyWeatherData } from "../../interfaces";
import { Container } from "./styles";

export function HourlyWeatherList({ hourlyWeatherData }: IHourlyWeatherData) {
  function renderItem(item: any) {
    return <WeatherHourlyCard hourlyWeatherData={item} />;
  }

  return (
    <Container
      data={hourlyWeatherData}
      renderItem={({ item }) => renderItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
