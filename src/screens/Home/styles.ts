import styled from "styled-components/native";

export const Container = styled.View<{isLoaded: boolean}>`
  justify-content: ${({ isLoaded }) => (isLoaded ? "flex-start" : "center")};
  align-items: center;
  flex: 1;
`;

export const ScrollableContent = styled.ScrollView`
  flex: 1;
`;

export const WindDataContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const DailyWeatherContainer = styled.View`
  padding: 0 32px;
  margin-top: 40px;
`;
