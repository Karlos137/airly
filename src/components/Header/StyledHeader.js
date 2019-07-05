import styled from "styled-components";

const StyledHeader = styled.div`
  height: 195px;
  background-color: ${props =>
    props.theme.colors.darkBackgroundColor2 ||
    props.theme.colors.backgroundColor4};
  box-shadow: ${props =>
    "0px 3px 7px " + props.theme.colors.dropBoxShadow || "none"};
`;

export default StyledHeader;
