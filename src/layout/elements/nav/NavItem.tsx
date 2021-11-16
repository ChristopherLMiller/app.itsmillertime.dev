import { FunctionComponent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
//import { LOGGED_IN, LOGGED_OUT } from 'config';
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
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  font-family: var(--font-block);
  font-weight: 300;
`;

const NavContainerVariants = {
  hover: {
    boxShadow: `var(--box-shadow-inset-2)`,
    transition: {
      duration: 0.25,
    },
  },
  rest: {
    boxShadow: `var(--box-shadow-inset-0)`,
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
  padding-block: 10px;
  width: 100%;
  justify-content: center;
`;

const ItemVariants = {
  hover: {
    color: `var(--color-white-100)`,
  },
  rest: {
    color: `var(--color-white-80)`,
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
  const isLocalUrl = !item.href.includes(`http`);

  // TODO: hack, this allows me to hide things for everyone
  if (item.authState === "NONE") {
    return null;
  }

  // see if the user is authorized to view this
  // TODO: Fix this, for next auth
  /*if (!auth.methods.hasPermission(item.requiredRoles)) return null;

  // chek the auth state of the item
  if (item.authState === LOGGED_IN && !session.isAuthenticated) return null;
  if (item.authState === LOGGED_OUT && auth.isAuthenticated) return null;*/

  // use the router to determine if this is the active path
  const isActive = item?.activePaths?.includes(router.pathname);

  // render appropriate link for local or external links
  if (isLocalUrl) {
    return (
      <NavContainer
        whileHover="hover"
        initial="rest"
        animate="rest"
        background={
          isActive
            ? `var(--color-gold-highlight)`
            : `var(--color-white-transparent)`
        }
        variants={NavContainerVariants}
      >
        <Link href={item.href}>
          <Item variants={ItemVariants}>
            <NavIcon
              src={`/svg/${item.icon}.svg`}
              alt={`${item.title} Page Link`}
              loading="lazy"
              width="35px"
              height="35px"
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
        <Item
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={ItemVariants}
        >
          <NavIcon src={`/svg/${item.icon}.svg`} width="35px" height="35px" />
          <Text>{item.title}</Text>
        </Item>
      </NavContainer>
    );
  }
};

export default NavItem;
