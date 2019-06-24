import styled from "styled-components";

const Title = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  margin-left: ${props => (props.compare ? "0px" : "35px")};
  margin-top: ${props => (props.compare ? "10px" : "25px")};
  text-align: ${props => (props.compare ? "center" : "left")};
`;

export default Title;
