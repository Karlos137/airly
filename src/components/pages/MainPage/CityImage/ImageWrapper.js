import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  margin: 25px auto 30px;
  background: #121212;
  text-align: center;
  max-width: 835px;

  @media (${props => props.theme.mediaQueries.desktop}) {
    margin-top: 35px;
  }
`;

export default ImageWrapper;
