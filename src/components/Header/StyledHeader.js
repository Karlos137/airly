import styled from "styled-components";

const StyledHeader = styled.div`
  height: 195px;
  background: ${props => props.backgroundColor4};
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
`;

export default StyledHeader;
