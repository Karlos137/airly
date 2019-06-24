import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  height: 127px;
  min-width: 70px;
  background: ${props => props.theme.colors.backgroundColor4};
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
  text-align: center;
`;

export default Wrapper;
