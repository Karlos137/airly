import styled from "styled-components";

const Cities = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 30px 35px 0px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: auto 160px auto;
    justify-content: center;
  }
`;

export default Cities;
