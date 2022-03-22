import { NavigationItem } from "@components/Navigation/Items/NavigationItem";
import { FunctionComponent } from "react";
import { useNav } from "src/lib/hooks/useNav";
import {
  NavigationBar,
  NavigationBarVariants,
  NavigationVariants,
  StyledNavigation,
} from "./styles";

const DesktopNav: FunctionComponent = () => {
  const { isLoading, navLinks } = useNav();

  return (
    <StyledNavigation
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      variants={NavigationVariants}
    >
      <NavigationBar variants={NavigationBarVariants}>
        {!isLoading &&
          navLinks.map((navItem, index) => (
            <NavigationItem key={`${navItem.slug}${index}`} item={navItem} />
          ))}
      </NavigationBar>
    </StyledNavigation>
  );
};

export default DesktopNav;
