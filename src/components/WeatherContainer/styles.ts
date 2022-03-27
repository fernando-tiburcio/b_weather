import styled from "styled-components/native";

export const Container = styled.View`
  height: 280px;
  min-width: 100%;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  padding-top: 16px;
  align-items: center;
`;

export const TemperatureDescription = styled.View`
  min-width: 50%;
  align-items: flex-end;
  padding-right: 8px;
`;

export const TemperatureGraphicalData = styled(TemperatureDescription)`
  align-items: flex-start;
  padding-left: 8px;
`;

export const MainTemperature = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZES.XL};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
`;

export const FeelsLikeTemperature = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
`;

export const WeatherImage = styled.Image`
  width: 128px;
  height: 128px;
`;

export const WeatherDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
  margin-top: 16px;
  text-align: center;
`;

export const WeatherDate = styled(WeatherDescription)`
  margin-top: 2px;
`;

export const TempVariationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 12px;
`;

export const MinTempDayContainer = styled.View`
flex-direction: row;
`;


export const MaxTempDayContainer = styled(MinTempDayContainer)`
  margin-left: 16px;
`;

export const TemperatureVariationLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
`;

