import styled from "styled-components";

const Cities = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 30px 35px 0px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: auto 160px auto;
    justify-content: center;
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    margin-top: 45px;
    grid-template-columns: auto 265px auto;
  }
`;

export default Cities;
