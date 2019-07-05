import styled from "styled-components";

const Title = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
  display: ${props => (props.compare ? "block" : "inline-block")};
  position: ${props => (props.compare ? "static" : "absolute")};
  right: 12px;
  bottom: 5px;
  text-align: center;
  margin: ${props => (props.compare ? "20px 0px 0px" : "0px")};
`;

export default Title;
