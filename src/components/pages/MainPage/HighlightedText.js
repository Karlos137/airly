import styled from "styled-components";

const HighlightedText = styled.span`
  font-size: 24px;
  color: ${props =>
    props.difference
      ? props.theme.colors.darkAccentGreenColor3 ||
        props.theme.colors.accentGreenColor3
      : props.theme.colors.darkPrimaryColor4 ||
        props.theme.colors.primaryColor4};
`;

export default HighlightedText;
