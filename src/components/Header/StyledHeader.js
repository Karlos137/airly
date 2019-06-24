import styled from "styled-components";

const StyledHeader = styled.div`
  height: 195px;
  background-color: ${props =>
    props.theme.colors.darkBackgroundColor2 ||
    props.theme.colors.backgroundColor4};
  box-shadow: 0px 3px 7px
    ${props =>
      props.theme.colors.darkDropBoxShadow || props.theme.colors.dropBoxShadow};
`;

export default StyledHeader;
