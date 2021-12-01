import styled from "styled-components";
import { motion } from "framer-motion";

export const ScrollTopDiv = styled(motion.div)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: var(--color-white-100);
  justify-content: center;
  align-content: center;
  font-size: 6rem;
  cursor: pointer;
`;

export const ScrollTopVariants = {
  hidden: {
    opacity: 0,
    display: `none`,
  },
  visible: {
    opacity: 1,
    display: `flex`,
  },
};
