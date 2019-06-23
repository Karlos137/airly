import styled from "styled-components";

const Num = styled.span`
  font-size: 64px;
  display: ${props => (props.compare ? "block" : "inline-block")};
  margin: ${props => (props.compare ? "0px" : "15px 0px 0px 15px")};
  text-align: center;
`;

export default Num;
