import styled from "styled-components";

const HighlightedText = styled.span`
  font-size: 24px;
  color: ${props =>
    props.theme.colors.darkPrimaryColor4 || props.theme.colors.primaryColor4};
`;

export default HighlightedText;
