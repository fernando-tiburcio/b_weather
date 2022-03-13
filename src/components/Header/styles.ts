import styled from 'styled-components/native';
import THEME from '../../theme';

export const Container = styled.View`
    height: 40px;
    width: 100%;
    background-color: ${THEME.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${THEME.COLORS.LIGHT_TEXT};
`;