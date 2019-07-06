import styled from "styled-components";

const Text = styled.span`
  text-transform: uppercase;
  display: ${props => (props.compare ? "block" : "inline-block")};
  width: ${props => (props.compare ? null : "150px")};
  margin-left: ${props => (props.compare ? "0px" : "10px")};
  margin-top: ${props => (props.compare ? "5px" : "0px")};
  padding: 0px 7px;
  text-align: center;
  font-size: ${props =>
    props.text === "UNHEALTHY FOR SENSITIVE GROUPS" ? "16px" : "24px"};
  font-weight: 700;
  color: ${props => props.color};
`;

export default Text;
