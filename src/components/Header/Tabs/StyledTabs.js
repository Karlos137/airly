import styled from "styled-components";

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 45px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 187px 187px;
    justify-content: center;
  }
`;

export default StyledTabs;
