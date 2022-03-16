import { Platform } from 'react-native';
import styled from 'styled-components/native';
import THEME from '../../theme';

export const Container = styled.View`
    height: 40px;
    width: 100%;
    background-color: ${THEME.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
    margin-top: ${Platform.OS === 'android'? '24px' : '0px'};
`;

export const Title = styled.Text`
  font-size: ${THEME.FONT_SIZES.RG};
  color: ${THEME.COLORS.LIGHT_TEXT};
`;
