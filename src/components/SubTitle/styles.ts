import styled from "styled-components/native";

export const Title = styled.Text`
  margin-top: 40px;
  margin-left: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.DARK_TEXT};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
`;
