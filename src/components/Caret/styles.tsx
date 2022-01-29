import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCaret = styled(motion.div)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 5px;
    border-top: 10px solid var(--color-white-80);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }

  &:after {
    content: "";
    position: absolute;
    left: 5px;
    top: -8px;
    border-top: 10px solid var(--color-gold);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
`;

export const CaretVariants = {
  up: {
    rotateX: 180,
    transition: {
      duration: 0.25,
    },
  },
  down: {
    rotateX: 0,
    transition: {
      duration: 0.25,
    },
  },
};
