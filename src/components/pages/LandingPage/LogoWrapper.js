import styled from "styled-components";

const LogoWrapper = styled.div`
  padding-top: 75px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding-top: 255px;
  }
`;

export default LogoWrapper;
