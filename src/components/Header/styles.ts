import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    height: ${RFValue(40)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
    margin-top: ${Platform.OS === 'android'? `${RFValue(23)}px` : '0px'};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.RG};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEXT};
`;
