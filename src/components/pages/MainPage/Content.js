import styled from "styled-components";

const Content = styled.div`
  @media (${props => props.theme.mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 410px auto;
    grid-gap: 90px;
    width: 810px;
    margin: 0 auto;
  }
`;

export default Content;
