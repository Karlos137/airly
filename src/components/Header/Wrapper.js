import styled from "styled-components";

const Wrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    height: 45px;
    margin: 0;
  }
`;

export default Wrapper;
