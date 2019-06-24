import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 35px auto 0px;
  width: 130px;
  height: 40px;
  background-color: ${props =>
    props.theme.colors.darkPrimaryColor4 || props.theme.colors.primaryColor4};
  color: ${props =>
    props.theme.colors.darkNeutralColor7 || props.theme.colors.neutralColor7};
  font-size: 18px;
  border: none;
  border-radius: 3px;
`;

export default Button;
