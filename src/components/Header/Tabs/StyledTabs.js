import styled from "styled-components";

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 45px;
  background: red;
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
`;

export default StyledTabs;
