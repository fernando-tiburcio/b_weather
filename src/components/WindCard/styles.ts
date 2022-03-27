import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View.attrs({
})`
  width: 48%;
  background-color: ${({theme}) => theme.COLORS.WHITE_BACKGROUND};
  padding: 12px 0;
  margin-top: 6px;
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: center;
`;

export const WeatherImage = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  margin-right: 16px;
`;

export const WeatherDataContainer = styled.View`
  align-items: center;
`;

export const WeatherDataLabel = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZES.RG};
  color: ${({theme}) => theme.COLORS.DARK_TEXT};
`;

export const WeatherSubLabel = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZES.XS};
  color: ${({theme}) => theme.COLORS.DARK_TEXT};
`;
