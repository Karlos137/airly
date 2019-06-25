import styled from "styled-components";

const AqiItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 15px 35px 0px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 160px 90px 160px;
    justify-content: center;
  }
`;

export default AqiItems;
