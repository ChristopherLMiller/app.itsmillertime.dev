import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuButton = styled.button`
  background: var(--color-red-intermediate);
  visibility: visible;
  color: var(--color-white-80);
  font-family: var(--font-block);
  text-transform: uppercase;
  margin-block: 5px;
  margin-inline-start: -5px;
  min-width: 50px;
  font-size: var(--h5-size);
  border: 1px solid var(--color-white-80);
  cursor: pointer;

  @media (min-width: 500px) {
    visibility: hidden;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 55px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-gold);
`;

export const MobileMenuVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      staggerChildren: 0.5,
    },
  },
};
