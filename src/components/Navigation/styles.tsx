import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavigation = styled(motion.nav)`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    max-width: var(--max-width-wide);
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
