import styled from "styled-components/native";
import THEME from "../../theme";

export const Container = styled.View`
  width: 172px;
  background-color: ${THEME.COLORS.WHITE_BACKGROUND};
  margin-top: 6px;
  flex-direction: row;
  justify-content: center;
`;

export const WeatherImage = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

export const WeatherDataContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WeatherDataLabel = styled.Text`
  font-size: ${THEME.FONT_SIZES.RG};
  color: ${THEME.COLORS.DARK_TEXT};
`;

export const WeatherSubLabel = styled.Text`
  font-size: ${THEME.FONT_SIZES.XS};
  color: ${THEME.COLORS.DARK_TEXT};
`;
