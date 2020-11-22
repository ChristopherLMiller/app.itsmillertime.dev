import { useAuth } from "src/lib/AuthProvider";
import { Fragment, FunctionComponent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LOGGED_IN, LOGGED_OUT } from "config";
import { useRouter } from "next/router";

interface iNavItem {
  item: {
    title: string;
    href: string;
    activePaths: [string];
    authState: string;
    icon: string;
    requiredRoles?: [string];
  };
}

interface iNavContainer {
  isActive: boolean;
}

const NavContainer = styled(motion.div)<iNavContainer>`
  position: relative;
  background: ${(props) =>
    props.isActive
      ? "var(--color-gold-transparent)"
      : "var(--color-white-transparent)"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-start: 10px;
  padding-block-end: 10px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  font-family: var(--font-block);
`;

const NavContainerVariants = {
  hover: {
    boxShadow: "var(--box-shadow-inset-1)",
    transition: {
      duration: 0.25,
    },
  },
  rest: {
    boxShadow: "none",
    transition: {
      duration: 0.25,
    },
  },
};

const Item = styled(motion.a)`
  display: flex;
  align-items: center;
  color: var(--color-white-80);
  box-shadow: var(--box-shadow-inset);
`;

const ItemVariants = {
  hover: {
    color: "var(--color-white-100)",
  },
  rest: {
    color: "var(--color-white-80)",
  },
};

const NavIcon = styled(motion.img)`
  width: 35px;
  padding: 5px;
  cursor: pointer;
`;

const Text = styled.span`
  padding-inline-start: 5px;
  font-size: calc(var(--p-size) - 10%);
  text-transform: capitalize;
`;

const NavItem: FunctionComponent<iNavItem> = ({ item }) => {
  const router = useRouter();
  const auth = useAuth();
  const isLocalUrl = !item.href.includes("http");

  // see if the user is authorized to view this
  if (!auth.methods.hasPermission(item.requiredRoles)) return null;

  // chek the auth state of the item
  if (item.authState === LOGGED_IN && !auth.isAuthenticated) return null;
  if (item.authState === LOGGED_OUT && auth.isAuthenticated) return null;

  // use the router to determine if this is the active path
  const isActive = item?.activePaths?.includes(router.pathname);

  // render appropriate link for local or external links
  if (isLocalUrl) {
    return (
      <NavContainer
        whileHover="hover"
        initial="rest"
        animate="rest"
        isActive={isActive}
        variants={NavContainerVariants}
      >
        <Link href={item.href}>
          <Item variants={ItemVariants}>
            <NavIcon
              src={`/svg/${item.icon}.svg`}
              alt={`${item.title} Page Link`}
              loading="lazy"
            />
            <Text>{item.title}</Text>
          </Item>
        </Link>
      </NavContainer>
    );
  } else {
    return (
      <NavContainer
        whileHover="hover"
        initial="rest"
        animate="rest"
        isActive={isActive}
        variants={NavContainerVariants}
      >
        <Item href={item.href} target="_blank" variants={ItemVariants}>
          <NavIcon src={`/svg/${item.icon}.svg`} />
          <Text>{item.title}</Text>
        </Item>
      </NavContainer>
    );
  }
};

export default NavItem;
