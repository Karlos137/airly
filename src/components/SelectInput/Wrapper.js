import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: ${props => (props.margin !== undefined ? props.margin : "45px")} auto
    0;
  width: 305px;
  height: 45px;
  @media (${props => props.theme.mediaQueries.desktop}) {
    width: 350px;
    margin: ${props => (props.margin !== undefined ? props.margin : "70px")}
      auto 0;
  }
`;

export default Wrapper;
