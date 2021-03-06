import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  elevation: 4
})`
    width: ${RFValue(80)}px;
    height: ${RFValue(110)}px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.WHITE_BACKGROUND};
    align-items: center;
    justify-content: center;
    margin: 0 6px;
    margin-top: 16px;
`;

export const WeatherImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
`;

export const TemperatureLabel = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZES.MD};
  color: ${({theme}) => theme.COLORS.DARK_TEXT};
  font-family: ${({theme}) => theme.FONTS.BOLD};
`;

export const TimeLabel = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZES.SM};
color: ${({theme}) => theme.COLORS.DARK_TEXT};
font-family: ${({theme}) => theme.FONTS.REGULAR};
`;
