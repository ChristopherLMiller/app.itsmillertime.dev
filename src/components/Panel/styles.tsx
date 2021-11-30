import { motion } from "framer-motion";
import styled from "styled-components";

export interface iStyledPanel {
  align?: string;
  padding?: boolean;
}

export const StyledPanel = styled<iStyledPanel>(motion.div)`
  :before {
    content: "";
    background: var(--color-grey-light);
    background-image: var(--linen-paper);
    opacity: 0.75;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    z-index: -1;
  }

  padding: ${(props) => props.padding};
  position: relative;
  text-align: ${(props) => props.align};
  ${(props) => props.boxed}

  img {
    max-width: 100%;
  }
`;
