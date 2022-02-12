import { iNavItem } from "@components/Navigation/Items";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import ChildNavItem from "./ChildNavItem";
import NavItem from "./NavItem";
import { NavigationItemVariants, StyledNavigationItem } from "./styles";

export const NavigationItem: FunctionComponent<iNavItem> = ({ item }) => {
  const router = useRouter();
  const isActive = item.activePaths.includes(router.pathname);
  const hasChildren = item?.children?.items?.length > 0;

  return (
    <StyledNavigationItem
      whileHover="hover"
      initial="hidden"
      animate="visible"
      variants={NavigationItemVariants}
      background={
        isActive ? "var(--color-gold-highlight)" : "var(--color-gold)"
      }
    >
      {!hasChildren && <NavItem item={item} key={item.title} />}
      {hasChildren && <ChildNavItem item={item} key={item.title} />}
    </StyledNavigationItem>
  );
};
