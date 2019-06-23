import styled from "styled-components";

const Wrapper = styled.div`
  height: ${props => (props.compare ? "170px" : "110px")};
  background-color: ${props => props.theme.colors.backgroundColor4};
  margin: 20px 35px 0px;
  padding-top: ${props => (props.compare ? "15px" : "0px")};
  position: relative;
  width: ${props => (props.compare ? "135px" : "auto")};
`;

export default Wrapper;
