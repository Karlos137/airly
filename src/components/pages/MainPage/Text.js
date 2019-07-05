import styled from "styled-components";

const Text = styled.p`
  font-size: 18px;
  margin: 15px 100px 0px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding-bottom: 15px;
  }
`;

export default Text;
