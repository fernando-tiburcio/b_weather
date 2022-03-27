import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
    margin-top: ${Platform.OS === 'android'? '24px' : '0px'};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.RG};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
`;
