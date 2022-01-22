import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import {
  NavigationChildMenu,
  NavigationChildMenuItem,
  NavigationElement,
  NavigationElementIcon,
  NavigationElementText,
  NavigationElementVariants,
  NavigationItemVariants,
  StyledNavigationItem,
} from "./styles";

interface iNavChilditem {
  title: string;
  activePaths: [string];
  href: string;
  authState: string;
  requiredRoles?: [string];
}
interface iNavItem {
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
  const isLocalUrl = !item.href.includes("http");
  const isActive = item.activePaths.includes(router.pathname);

  return (
    <StyledNavigationItem
      whileHover="hover"
      initial="hidden"
      animate="visible"
      variants={NavigationItemVariants}
      background={
        isActive ? "var(--color-gold-transparent)" : "var(--color-gold)"
      }
    >
      {isLocalUrl ? (
        <LocalNavItem item={item} />
      ) : (
        <ExternalNavItem item={item} />
      )}
      {item.children?.items && (
        <NavigationChildMenu>
          {item.children?.items.map((item) => (
            <ChildNavItem
              key={item.title}
              title={item.title}
              activePaths={item.activePaths}
              href={item.href}
              authState={item.authState}
            />
          ))}
        </NavigationChildMenu>
      )}
    </StyledNavigationItem>
  );
};

const LocalNavItem: FunctionComponent<iNavItem> = ({ item }) => (
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

const ExternalNavItem: FunctionComponent<iNavItem> = ({ item }) => (
  <NavigationElement
    variants={NavigationElementVariants}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NavigationElementIcon
      src={`/svg/${item.icon}.svg`}
      alt={`${item.title} Page Link`}
      loading="lazy"
      width="35px"
      height="35px"
    />
    <NavigationElementText>{item.title}</NavigationElementText>
  </NavigationElement>
);

const ChildNavItem: FunctionComponent<iNavChilditem> = ({
  title,
  activePaths,
  href,
  authState,
}) => (
  <NavigationChildMenuItem>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </NavigationChildMenuItem>
);
