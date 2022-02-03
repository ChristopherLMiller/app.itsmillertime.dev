import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavigationItem = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 175px;
  background: ${(props) => props.background};
  flex-grow: 1;
`;

export const NavigationItemVariants = {
  hidden: {
    opacity: 0,
    boxShadow: `var(--box-shadow-inset-0)`,
  },
  visible: {
    opacity: 1,
    boxshadow: `var(--box-shadow-inset-0)`,
    transition: {
      duration: 0.25,
    },
  },
  hover: {
    boxShadow: `var(--box-shadow-inset-2)`,
    transition: {
      duration: 0.25,
    },
  },
};

export const NavigationElement = styled(motion.a)`
  display: flex;
  align-items: center;
  color: var(--color-white-80);
  font-family: var(--font-block);
  font-weight: 300;
  padding-block: 10px;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const NavigationElementVariants = {
  hover: {
    opacity: 1,
  },
  visible: {
    opacity: 0.8,
  },
};

export const NavigationElementIcon = styled(motion.img)`
  width: 35px;
  padding: 5px;
  cursor: pointer;
`;

export const NavigationElementText = styled.span`
  padding-inline-start: 5px;
  font-size: var(--p-size);
  text-transform: capitalize;
  position: relative;
`;

export const ChildNavManu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--color-red-dark);
  border: 2px solid var(--color-gold);
  border-top: none;
  z-index: 1;
`;

export const ChildNavMenuVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const ChildMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ChildMenuItem = styled.li`
  text-transform: capitalize;
  text-align: center;
  padding: 1rem;
`;

export const ChildMenuItemLink = styled.a`
  text-decoration: none;
  color: var(--color-white-80);
  font-family: var(--font-main);

  :hover {
    color: var(--color-white-100);
  }
`;
