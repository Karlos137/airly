import styled from "styled-components";

const StyledOptionList = styled.div`
  width: 305px;
  background: ${props =>
    props.theme.colors.darkBackgroundColor4 ||
    props.theme.colors.backgroundColor4};
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.colors.dropBoxShadow
      ? "0px 3px 7px " + props.theme.colors.dropBoxShadow
      : "none"};
  padding: 15px 15px 0;
  /* display: ${props => (props.isOpen ? "inline-block" : "none")}; */
  position: relative;
  z-index: 2;
  max-height: 200px;
  overflow-y: scroll;
  cursor: pointer;

  @media (${props => props.theme.mediaQueries.desktop}) {
    width: 350px;
  }
`;

export default StyledOptionList;
