import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import ChildNavItem from "./ChildNavItem";
import NavItem from "./NavItem";
import { NavigationItemVariants, StyledNavigationItem } from "./styles";

export interface iNavChilditem {
  title: string;
  activePaths: [string];
  href: string;
  authState: string;
  requiredRoles?: [string];
}

export interface iNavItem {
  item: {
    title: string;
    href: string;
    activePaths: [string];
    authState: string;
    icon: string;
    requiredRoles?: [string];
    children?: {
      items: [iNavChilditem];
    };
  };
}

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
      {!hasChildren && <NavItem item={item} />}
      {hasChildren && <ChildNavItem item={item} />}
    </StyledNavigationItem>
  );
};
