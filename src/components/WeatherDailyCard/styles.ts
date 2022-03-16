import styled from "styled-components/native";
import THEME from "../../theme";

export const Container = styled.View`
  width: 95%;
  height: 48px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-horizontal: 32px;
  margin-top: 6px;
`;

export const WeatherImage = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 16px;
`;

export const WeatherDateLabel = styled.Text`
  font-size: ${THEME.FONT_SIZES.SM};
  color: ${THEME.COLORS.DARK_TEXT};
`;

export const WeatherTemperatureLabel = styled.Text`
  font-size: ${THEME.FONT_SIZES.SM};
  color: ${THEME.COLORS.DARK_TEXT};
`;
