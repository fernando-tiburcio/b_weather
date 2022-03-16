import styled from 'styled-components/native';
import THEME from '../../theme';

export const Container = styled.SafeAreaView`
    width: 80px;
    height: 110px;
    border-radius: 6px;
    background-color: ${THEME.COLORS.WHITE_BACKGROUND};
    align-items: center;
    justify-content: center;
    margin-horizontal: 6px;
    margin-top: 16px;
`;

export const WeatherImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const TemperatureLabel = styled.Text`
  font-size: ${THEME.FONT_SIZES.MD};
  color: ${THEME.COLORS.DARK_TEXT};
  font-family: ${THEME.FONTS.BOLD};
`;

export const TimeLabel = styled.Text`
font-size: ${THEME.FONT_SIZES.SM};
color: ${THEME.COLORS.DARK_TEXT};
font-family: ${THEME.FONTS.REGULAR};
`;
