import styled from "styled-components";

const StyledSelectInput = styled.input`
  width: 305px;
  height: 45px;
  border: none;
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.colors.dropBoxShadow
      ? "0px 3px 7px " + props.theme.colors.dropBoxShadow
      : "none"};
  padding-left: 15px;
  padding-right: 50px;
  font-size: 16px;
  background: ${props => props.theme.colors.darkBackgroundColor4};
  color: ${props => props.theme.colors.darkNeutralColor7};

  ::placeholder {
    color: ${props =>
      props.theme.colors.darkNeutralColor3 || props.theme.colors.neutralColor3};
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    width: 350px;
  }
`;

export default StyledSelectInput;
