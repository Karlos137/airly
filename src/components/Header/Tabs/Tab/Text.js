import styled from "styled-components";

const Text = styled.h4`
  color: ${props =>
    props.active
      ? props.theme.colors.darkNeutralColor7 || props.theme.colors.neutralColor7
      : props.theme.colors.darkSecondaryColor6 ||
        props.theme.colors.secondaryColor3};
`;

export default Text;
