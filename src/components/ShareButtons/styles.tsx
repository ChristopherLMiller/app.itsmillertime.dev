import { motion } from "framer-motion";
import styled from "styled-components";

export const ShareButtonWrapper = styled(motion.div)`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate3D(0, -50%, 0);
  }
`;

export const ShareButtonVariants = {
  hidden: {
    opacity: 0,
    translateX: `-60px`,
  },
  visible: {
    opacity: 1,
    translateX: `0px`,
    transition: {
      delay: 2,
    },
  },
};
