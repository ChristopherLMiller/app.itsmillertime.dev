import { motion } from "framer-motion";
import styled from "styled-components";

export const Modal = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  background: var(--color-black-60);
`;

export const StyledLightbox = styled(motion.div)`
  padding: 20px;
  background: var(--color-white-100);
  max-height: 90%;
  max-width: 90%;
  display: flex;

  img {
    display: block;
    width: 100%;
    aspectratio: 3/2;
    height: auto;
  }
`;
