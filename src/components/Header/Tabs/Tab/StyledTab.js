import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledTab = styled(NavLink)`
  text-decoration: none;
  background: ${props =>
    props.active
      ? props.theme.colors.darkSecondaryColor2 ||
        props.theme.colors.secondaryColor4
      : props.theme.colors.darkBackgroundColor2 ||
        props.theme.colors.backgroundColor4};
  text-align: center;
  line-height: 45px;
`;

export default StyledTab;
