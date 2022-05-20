import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavigation = styled(motion.nav)`
  display: none;
  z-index: 1200;

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block-end: var(--margin-5);
  }
`;

export const NavigationVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 2,
      staggerChildren: 5,
    },
  },
};

export const NavigationBar = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: var(--color-gold);
`;

export const NavigationBarVariants = {
  hidden: {
    boxShadow: "0px 0px 0px var(--color-red-80)",
    transition: {
      duration: 2,
    },
  },
  visible: {
    boxShadow: "14px -14px 0px var(--color-red-80)",
    transition: {
      staggerChildren: 0.5,
    },
  },
};
