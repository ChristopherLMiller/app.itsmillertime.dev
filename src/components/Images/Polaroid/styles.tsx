import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPolaroid = styled(motion.figure)`
  background: var(--color-white-100);
  padding: 20px;
  margin: 1rem;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Caption = styled.p`
  font-family: var(--font-marker);
  font-style: bolder;
`;
export const EXIF = styled.p``;

export const PolaroidVariants = {
  initial: {
    scale: 1,
    zIndex: 1,
  },
  hover: {
    scale: 1.05,
    zIndex: 1000,
    rotateZ: 0,
  },
};
