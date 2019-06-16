import styled from "styled-components";

const Paragraph = styled.p`
  margin: ${props => (props.marginTop ? props.marginTop : "10px")} 30px 0px;
  text-align: center;
  font-size: ${props => props.fontSize && props.fontSize};
`;

export default Paragraph;
