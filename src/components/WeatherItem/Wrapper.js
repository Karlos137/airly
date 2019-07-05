import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  height: 127px;
  min-width: 70px;
  background: ${props =>
    props.theme.colors.darkBackgroundColor4 ||
    props.theme.colors.backgroundColor4};
  box-shadow: ${props =>
    props.theme.colors.dropBoxShadow
      ? "0px 3px 7px " + props.theme.colors.dropBoxShadow
      : "none"};
  text-align: center;
`;

export default Wrapper;
