import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  text-align: right;
  margin: 10px 0;
  color: ${props =>
    props.theme.colors.darkSecondaryColor2 ||
    props.theme.colors.secondaryColor2};
`;

export default NavLink;
