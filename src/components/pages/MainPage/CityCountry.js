import styled from "styled-components";

const CityCountry = styled.h3`
  font-size: 14px;
  color: ${props =>
    props.theme.colors.darkNeutralColor2 || props.theme.colors.neutralColor3};
  text-align: center;
`;

export default CityCountry;
