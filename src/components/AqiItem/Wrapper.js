import styled from "styled-components";

const Wrapper = styled.div`
  height: ${props => (props.compare ? "170px" : "110px")};
  background-color: ${props =>
    props.theme.colors.darkBackgroundColor4 ||
    props.theme.colors.backgroundColor4};
  margin: ${props => (props.compare ? "0px" : "20px 35px 0px")};
  padding-top: ${props => (props.compare ? "15px" : "0px")};
  position: relative;
  min-width: ${props => (props.compare ? "135px" : "auto")};
  max-width: ${props => (props.compare ? "200px" : "308px")};

  @media (${props => props.theme.mediaQueries.tablet}) {
    max-width: ${props => (props.compare ? "160px" : "308px")};
    margin: 0px;
  }
`;

export default Wrapper;
