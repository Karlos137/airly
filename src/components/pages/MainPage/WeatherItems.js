import styled from "styled-components";

const WeatherItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  margin: 20px 35px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    max-width: 410px;
    grid-column-gap: 25px;
    margin: auto;
  }
`;

export default WeatherItems;
