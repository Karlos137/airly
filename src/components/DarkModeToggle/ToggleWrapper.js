import styled from "styled-components";

const ToggleWrapper = styled.div`
  height: 74px;
  text-align: right;
  padding: 15px 35px 35px 0px;
  display: ${props => (props.for === "mobile" ? "block" : "none")};

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding: 0 35px 0 0;
    justify-self: end;
    display: ${props => (props.for !== "mobile" ? "block" : "none")};
  }
`;

export default ToggleWrapper;
