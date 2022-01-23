import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationChildMenu = styled(motion.ul)`
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

export const NavigationchildMenuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
