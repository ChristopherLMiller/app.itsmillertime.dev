import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavigationItem = styled(motion.div)`
  position: relative;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 200px;
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
`;

export const NavigationChildMenu = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;

  padding: 0;
  margin: 0;
  box-shadow: var(--box-shadow-elev-1);
  border: 2px solid var(--color-gold-transparent);
  border-top: none;
  z-index: 888;
`;

export const NavigationChildMenuItem = styled(motion.li)`
  list-style-type: none;
  padding-inline-start: 10px;
  padding-block: 10px;

  background: var(--color-red-dark);

  a {
    text-decoration: none;
    color: var(--color-white-80);
  }

  :hover {
    a {
      color: var(--color-white-100);
    }
    background: var(--color-red);
  }
`;
