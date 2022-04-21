import { motion } from "framer-motion";
import styled from "styled-components";

export const SplitPane = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--linen-paper);
`;

export const TextPane = styled(motion.div)`
  align-items: center;
  text-align: center;
  background: var(--color-red-intermediate);
  padding: 3% 5%;

  p,
  h3,
  a {
    color: var(--color-white-100);
    font-weight: 100;
  }

  h3 {
    font-family: var(--font-alt);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: var(--h4-size);
  }

  a {
    cursor: pointer;
    color: var(--color-white-100) !important;
    text-decoration: underline;
  }
`;

export const ContentPane = styled.div`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
