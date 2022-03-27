import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";

import {
  ICurrentWeatherProps,
  IDailyWeather,
} from "../../interfaces";

import { Header } from "../../components/Header";
import { WeatherContainer } from "../../components/WeatherContainer";
import { HourlyWeatherList } from "../../components/HourlyWeatherList";
import { WindCard } from "../../components/WindCard";
import { WeatherDailyCard } from "../../components/WeatherDailyCard";
import { SubTitle } from "../../components/SubTitle";
import {
  Container,
  ScrollableContent,
  WindDataContainer,
  DailyWeatherContainer,
} from "./styles";
import { getWeatherData } from "../../helpers/getWeatherData";
import { getWeatherApiLocalization } from "../../helpers/getWeatherApiLocalization";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeatherProps>();
  const [hourlyWeather, setHourlyWeather] = useState<ICurrentWeatherProps[]>();
  const [dailyWeather, setDailyWeather] = useState<IDailyWeather>();
  const [localization, setLocalization] = useState("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const weatherData = async () => {
    const location = await Location.getCurrentPositionAsync();
    const weather = await getWeatherData(location);
    const weatherLocalization = await getWeatherApiLocalization(location);

    if (weather.data && weatherLocalization.data) {
      setCurrentWeather(weather.data.current);
      setHourlyWeather(weather.data.hourly.slice(0, 12));
      setDailyWeather(weather.data.daily.slice(0, 5));
      setLocalization(weatherLocalization.data[0].name);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    weatherData();
  }, []);

  return (
    <Container isLoaded={isLoaded}>
      {isLoaded && (
        <>
          <Header localName={localization} />
          {!isLoaded && <ActivityIndicator size={"large"} color={"blue"} />}
          {currentWeather && hourlyWeather && (
              <ScrollableContent>
                <WeatherContainer currentWeather={currentWeather} />
                <HourlyWeatherList hourlyWeatherData={hourlyWeather} />
                <SubTitle title="Vento e Ambiente" />
                <WindDataContainer>
                  {currentWeather.wind_speed && (
                    <WindCard
                      icon="50d"
                      dataLabel="Vel. vento"
                      value={`${currentWeather.wind_speed} km/h`}
                    />
                  )}
                  <WindCard
                    icon="03d"
                    dataLabel="Visibilidade"
                    value={`${currentWeather.visibility} m`}
                  />
                  <WindCard
                    icon="uv-index"
                    dataLabel="Índice Uv"
                    value={currentWeather.uvi}
                  />
                  <WindCard
                    icon="humidity"
                    dataLabel="Umidade"
                    value={`${currentWeather.humidity} %`}
                  />
                </WindDataContainer>
                <SubTitle title="Previsão 5 dias" />
                <DailyWeatherContainer>
                  {dailyWeather
                    ? Object.values(dailyWeather).map((item: any) => (
                        <WeatherDailyCard
                          key={item.dt}
                          dailyWeatherData={item}
                        />
                      ))
                    : null}
                </DailyWeatherContainer>
              </ScrollableContent>
            )}
        </>
      )}
    </Container>
  );
}
