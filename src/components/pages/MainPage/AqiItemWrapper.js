import styled from "styled-components";

const AqiItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 378px auto;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 308px 102px;
    justify-content: center;
  }
`;

export default AqiItemWrapper;
