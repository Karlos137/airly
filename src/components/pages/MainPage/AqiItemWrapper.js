import styled from "styled-components";

const AqiItemWrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 308px 102px;
    justify-content: center;
  }
`;

export default AqiItemWrapper;
