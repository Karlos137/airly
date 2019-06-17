import styled from "styled-components";

const Slider = styled.label`
  position: absolute;
  width: 50px;
  height: 24px;
  background-color: ${props => props.theme.colors.neutralColor5};
  top: 0;
  left: 0;
  border-radius: 24px;
  z-index: -1;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    top: 2px;
    left: ${props => (props.checked ? "27px" : "3px")};
    background-color: ${props => props.theme.colors.neutralColor2};
    border-radius: 50%;
    transition: all 0.7s;
  }
`;

export default Slider;
