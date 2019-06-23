import styled from "styled-components";

const StyledOptionList = styled.div`
  width: 305px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
  padding: 15px 15px 0;
  display: ${props => (props.isOpen ? "inline-block" : "none")};
  position: relative;
  z-index: 2;
`;

export default StyledOptionList;
