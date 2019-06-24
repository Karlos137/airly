import styled from "styled-components";
import { ChevronDown } from "styled-icons/boxicons-regular/ChevronDown";

const ArrowDown = styled(ChevronDown)`
  position: absolute;
  right: 10px;
  top: 7px;
  color: ${props =>
    props.theme.colors.darkSecondaryColor4 ||
    props.theme.colors.secondaryColor1};
`;

export default ArrowDown;
