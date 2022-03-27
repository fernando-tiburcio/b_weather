import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text } from "react-native";
import * as Location from "expo-location";

import api from "../../services/api";
import {
  ICurrentWeather,
  IHourlyWeather,
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

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [hourlyWeather, setHourlyWeather] = useState<IHourlyWeather>();
  const [dailyWeather, setDailyWeather] = useState<IDailyWeather>();
  const [localization, setLocalization] = useState("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getGeoLocation = async () => {
    const local = await Location.getCurrentPositionAsync();
    return local;
  };

  const weatherData = async () => {
    const location = await getGeoLocation();
    const response = await api.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
          appid: "ab29605c1d70f56b81f1a0ec66045448",
          units: "metric",
          lang: "pt_br",
          exclude: "minutely,alerts",
        },
      }
    );

    const weatherApiLocalization = await api.get(
      "https://api.openweathermap.org/geo/1.0/reverse",
      {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
          appid: "ab29605c1d70f56b81f1a0ec66045448",
          limit: 3,
          lang: "pt_br",
        },
      }
    );

    if (response.data && weatherApiLocalization.data) {
      setCurrentWeather(response.data.current);
      setHourlyWeather(response.data.hourly.slice(0, 12));
      setDailyWeather(response.data.daily.slice(0, 5));
      setLocalization(weatherApiLocalization.data[0].name);
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
            <DailyWeatherContainer>
            <SubTitle title="Previsão 5 dias" />
              {/* <Text style={{ color: THEME.COLORS.DARK_TEXT }}>
                Previsão 5 dias
              </Text> */}
              {dailyWeather
                ? Object.values(dailyWeather).map((item: any) => (
                    <WeatherDailyCard key={item.dt} dailyWeatherData={item} />
                  ))
                : null}
            </DailyWeatherContainer>
          </ScrollableContent>
        </>
      )}
      {!isLoaded && <ActivityIndicator size={"large"} color={"blue"} />}
    </Container>
  );
}
