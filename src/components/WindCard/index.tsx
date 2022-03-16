import React from "react";

import iconsImport from '../../helpers/iconsImport';

import {
  Container,
  WeatherDataContainer,
  WeatherDataLabel,
  WeatherImage,
  WeatherSubLabel,
} from "./styles";

export function WindCard({ icon, dataLabel, value}: any) {
  return (
  <Container>
    <WeatherImage source={iconsImport[icon]} />
    <WeatherDataContainer>
      <WeatherSubLabel>
        {dataLabel}
      </WeatherSubLabel>
      <WeatherDataLabel>
        {value}
      </WeatherDataLabel>
    </WeatherDataContainer>
  </Container>
  );
}
