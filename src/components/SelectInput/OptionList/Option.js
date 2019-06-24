import styled from "styled-components";

const Option = styled.div`
  padding-bottom: 15px;
  color: ${props =>
    props.theme.colors.darkNeutralColor3 || props.theme.colors.neutralColor3};

  :hover {
    color: ${props =>
      props.theme.colors.darkNeutralColor7 || props.theme.colors.neutralColor1};
  }
`;

export default Option;
