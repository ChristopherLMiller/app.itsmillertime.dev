import Link from "next/link";
import { FunctionComponent } from "react";
import { iNavItem } from "./NavigationItem";
import {
  NavigationElement,
  NavigationElementIcon,
  NavigationElementText,
  NavigationElementVariants,
} from "./styles";

const NavItem: FunctionComponent<iNavItem> = ({ item }) => (
  <Link href={item.href}>
    <NavigationElement variants={NavigationElementVariants}>
      <NavigationElementIcon
        src={`/svg/${item.icon}.svg`}
        alt={`${item.title} Page Link`}
        loading="lazy"
        width="35px"
        height="35px"
      />
      <NavigationElementText>{item.title}</NavigationElementText>
    </NavigationElement>
  </Link>
);

export default NavItem;
