import styled from "styled-components";
import { motion } from "framer-motion";

export const ModelItem = styled(motion.article)`
  border: 5px solid var(--color-red);
  height: min-content;
`;

export const variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

export const ModelName = styled.div`
  grid-column: 1 / -1;
  background: var(--color-red);
  padding: 1% 3%;
  font-family: var(--font-alt);
  font-size: var(--p-size);
  letter-spacing: 2px;

  a {
    color: var(--color-white-80);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-white-100);
  }
`;

export const ModelImage = styled.div`
  grid-column: 1 / 2;

  span {
    min-height: 100%;
  }
`;

export const TagList = styled.div`
  background: var(--color-grey-darker);
  font-size: var(--p-size);
  font-family: var(--font-alt);
  color: var(--color-white-80);
  padding-inline: 1rem;
  padding-block: 0.5rem;

  a {
    text-decoration: none;
    color: var(--color-red);
    cursor: pointer;
  }
`;
