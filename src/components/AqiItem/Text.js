import styled from "styled-components";

const Text = styled.span`
  text-transform: uppercase;
  display: ${props => (props.compare ? "block" : "inline-block")};
  margin-left: ${props => (props.compare ? "0px" : "10px")};
  margin-top: ${props => (props.compare ? "5px" : "0px")};
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.color};
`;

export default Text;
