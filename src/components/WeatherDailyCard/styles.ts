import styled from "styled-components/native";
import { RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 98%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const WeatherCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WeatherImage = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  margin-right: 10px;
`;

export const WeatherDateLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.DARK_TEXT};
`;

export const WeatherTemperatureLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
  color: ${({ theme }) => theme.COLORS.DARK_TEXT};
`;
