import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavigation = styled(motion.nav)`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block-end: 5rem;
  }
`;

export const NavigationVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 2,
      staggerChildren: 500,
    },
  },
};

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 14px -14px 0px var(--color-red-80);
`;
