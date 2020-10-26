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
  width: 100%;
`;

const NavIconVariants = {
  hover: {
    scale: 1.35,
    marginTop: "10px",
    marginBottom: "10px",
    background: "var(--color-red-dark)",
    boxShadow: "var(--box-shadow-elev-1)",
  },
  rest: {
    scale: 1,
    margin: "0px",
    background: "var(--color-white-transparent)",
    boxShadow: "var(--box-shadow-elev-0)",
  },
};

const NavIcon = styled(motion.img)`
  width: 50px;
  padding: 5px;
  cursor: pointer;
`;

const NavHoverText = styled(motion.a)`
  display: flex;
  align-items: center;
  padding-left: 10px;
  top: 0;
  height: 100%;
  left: 100%;
  box-shadow: var(--box-shadow-elev-1);
  background: var(--color-red);
  min-width: 200px;
  z-index: 0;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  font-family: var(--font-block);
`;

const NavHoverTextVariants = {
  hover: {
    transform: "translateX(10%)",
  },
  rest: {
    transform: "translateX(-500%)",
  },
};

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
      >
        <Link href={item.href}>
            <Fragment>
          <NavIcon
            src={`/svg/${item.icon}.svg`}
            whileHover="hover"
            variants={NavIconVariants}
            initial="rest"
            animate="rest"
            alt={`${item.title} Page Link`}
            loading="lazy"
          />
          <NavHoverText variants={NavHoverTextVariants}>
            {item.title}
          </NavHoverText>
          </Fragment>
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
      >
        <NavIcon
          src={`/svg/${item.icon}.svg`}
          whileHover="hover"
          variants={NavIconVariants}
          initial="rest"
          animate="rest"
        />
        <NavHoverText
          href={item.href}
          target="_blank"
          variants={NavHoverTextVariants}
        >
          {item.title}
        </NavHoverText>
      </NavContainer>
    );
  }
};

export default NavItem;
