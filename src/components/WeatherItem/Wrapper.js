import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  height: 127px;
  width: 90px;
  background: ${props => props.theme.colors.backgroundColor4};
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
  text-align: center;
`;

export default Wrapper;
