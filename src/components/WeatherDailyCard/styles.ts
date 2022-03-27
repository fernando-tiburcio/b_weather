import styled from "styled-components/native";

export const Container = styled.View`
  width: 95%;
  height: 48px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 32px;
  margin-top: 6px;
`;

export const WeatherImage = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

export const WeatherDateLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.DARK_TEXT};
  margin-right: 24px;
`;

export const WeatherTemperatureLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.DARK_TEXT};
`;
