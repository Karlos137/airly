import styled from "styled-components";

const StyledSelectInput = styled.input`
  width: 305px;
  height: 45px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 3px 7px ${props => props.theme.colors.dropBoxShadow};
  padding-left: 15px;
  padding-right: 50px;
  font-size: 16px;

  ::placeholder {
    color: ${props => props.theme.colors.neutralColor3};
  }
`;

export default StyledSelectInput;
