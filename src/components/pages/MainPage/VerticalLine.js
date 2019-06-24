import styled from "styled-components";

const VerticalLine = styled.div`
  height: ${props => props.height};
  width: 1px;
  margin: auto;
  border-left: 1px solid ${props => props.theme.colors.backgroundColor1};
`;

export default VerticalLine;
