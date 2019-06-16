import styled from "styled-components";

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.neutralColor5};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    top: 2px;
    left: 3px;
    bottom: 2px;
    background-color: ${props => props.theme.colors.neutralColor2};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export default Slider;
