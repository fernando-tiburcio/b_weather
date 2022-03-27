import styled from "styled-components/native";

export const Container = styled.View<{isLoaded: boolean}>`
  justify-content: ${({ isLoaded }) => (isLoaded ? "flex-start" : "center")};
  flex: 1;
`;

export const ScrollableContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const WindDataContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DailyWeatherContainer = styled.View`
  padding: 0 16px;
  margin-bottom: 12px;
`;
